import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

interface Alignment {
  id: string;
  name: string;
  shortName: string;
  description: string;
  characteristics: string[];
  examples: string[];
  colors: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  icon: string;
}

@Component({
  selector: 'app-determine-aligment',
  imports: [CommonModule, CardModule, ButtonModule, ChipModule],
  template: `
    <div class="flex flex-col gap-6 p-6">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Choose Your Alignment
        </h2>
        <p class="text-xl text-gray-300 mb-6">
          Your alignment reflects your character's moral and ethical perspective
        </p>
        
        <!-- Alignment Grid Legend -->
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-6 inline-block">
          <div class="grid grid-cols-3 gap-2 text-sm">
            <div class="text-center font-semibold text-blue-300">Lawful</div>
            <div class="text-center font-semibold text-purple-300">Neutral</div>
            <div class="text-center font-semibold text-red-300">Chaotic</div>
          </div>
        </div>
      </div>

      <!-- Interactive Alignment Grid -->
      <div class="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        @for(alignment of alignments(); track alignment.id) {
          <div
            [class]="getAlignmentCardClasses(alignment)"
            (click)="selectAlignment(alignment)"
          >
            <div class="relative h-48 overflow-hidden rounded-t-xl">
              <div [class]="alignment.colors.gradient + ' absolute inset-0 opacity-80'"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                <i [class]="alignment.icon + ' text-4xl mb-3 drop-shadow-lg'"></i>
                <h3 class="text-xl font-bold text-center mb-1 drop-shadow-lg">
                  {{ alignment.name }}
                </h3>
                <span class="text-sm opacity-90 drop-shadow">{{ alignment.shortName }}</span>
              </div>
            </div>

            <div class="p-4 space-y-3">
              <p class="text-sm text-gray-300 leading-relaxed line-clamp-3">
                {{ alignment.description }}
              </p>

              <div class="space-y-2">
                <h5 class="text-xs font-semibold text-white uppercase tracking-wide">Characteristics:</h5>
                <div class="flex flex-wrap gap-1">
                  @for(trait of alignment.characteristics.slice(0, 3); track trait) {
                    <span class="text-xs px-2 py-1 bg-white/20 rounded-full text-white">
                      {{ trait }}
                    </span>
                  }
                </div>
              </div>

              @if(selectedAlignment()?.id === alignment.id) {
                <div class="space-y-2 pt-2 border-t border-white/20">
                  <h5 class="text-xs font-semibold text-white uppercase tracking-wide">Examples:</h5>
                  <div class="space-y-1">
                    @for(example of alignment.examples; track example) {
                      <div class="text-xs text-blue-200 flex items-center gap-1">
                        <i class="pi pi-check text-green-400"></i>
                        {{ example }}
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>

      <!-- Selected Alignment Summary -->
      @if(selectedAlignment()) {
        <div class="mt-8 max-w-2xl mx-auto">
          <div [class]="'bg-gradient-to-r ' + selectedAlignment()!.colors.gradient + ' rounded-xl p-6 shadow-2xl border border-white/20'">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <i [class]="selectedAlignment()!.icon + ' text-2xl text-white'"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white">{{ selectedAlignment()!.name }}</h3>
                <p class="text-white/80">{{ selectedAlignment()!.shortName }}</p>
              </div>
            </div>
            
            <p class="text-white/90 mb-4 leading-relaxed">
              {{ selectedAlignment()!.description }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-white mb-2">Key Traits:</h5>
                <div class="space-y-1">
                  @for(trait of selectedAlignment()!.characteristics; track trait) {
                    <div class="flex items-center gap-2 text-white/90">
                      <i class="pi pi-circle-fill text-xs"></i>
                      {{ trait }}
                    </div>
                  }
                </div>
              </div>
              
              <div>
                <h5 class="font-semibold text-white mb-2">Character Examples:</h5>
                <div class="space-y-1">
                  @for(example of selectedAlignment()!.examples; track example) {
                    <div class="flex items-center gap-2 text-white/90">
                      <i class="pi pi-star-fill text-xs text-yellow-300"></i>
                      {{ example }}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <!-- Action Buttons -->
      <div class="flex justify-center gap-4 mt-8">
        <p-button
          label="Clear Selection"
          icon="pi pi-refresh"
          severity="secondary"
          [disabled]="!selectedAlignment()"
          (click)="clearSelection()"
        />
        <p-button
          label="Random Alignment"
          icon="pi pi-bolt"
          severity="primary"
          (click)="randomAlignment()"
        />
      </div>
    </div>
  `,
  styles: `
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        transform: scale(1);
      }
      50% { 
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        transform: scale(1.02);
      }
    }

    .selected-alignment {
      animation: pulse-glow 2s ease-in-out infinite;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetermineAligmentComponent {
  selectedAlignment = signal<Alignment | null>(null);

  alignments = signal<Alignment[]>([
    {
      id: 'lawful-good',
      name: 'Lawful Good',
      shortName: 'The Crusader',
      description: 'Acts with honor and compassion, respecting law and order while helping others. Believes in doing the right thing through proper channels.',
      characteristics: ['Honorable', 'Compassionate', 'Lawful', 'Protective', 'Just'],
      examples: ['Paladin defending innocents', 'Judge upholding justice', 'Noble knight'],
      colors: {
        primary: 'blue-500',
        secondary: 'blue-200',
        gradient: 'from-blue-600 via-blue-500 to-cyan-400'
      },
      icon: 'pi pi-shield'
    },
    {
      id: 'neutral-good',
      name: 'Neutral Good',
      shortName: 'The Benefactor',
      description: 'Guided by conscience and desire to help others, balancing personal freedom with moral responsibility.',
      characteristics: ['Kind', 'Helpful', 'Balanced', 'Altruistic', 'Flexible'],
      examples: ['Village healer', 'Charitable merchant', 'Wise mentor'],
      colors: {
        primary: 'green-500',
        secondary: 'green-200',
        gradient: 'from-green-600 via-emerald-500 to-teal-400'
      },
      icon: 'pi pi-heart'
    },
    {
      id: 'chaotic-good',
      name: 'Chaotic Good',
      shortName: 'The Rebel',
      description: 'Follows heart and conscience, fighting for good but distrusting authority and preferring personal freedom.',
      characteristics: ['Free-spirited', 'Rebellious', 'Heroic', 'Independent', 'Passionate'],
      examples: ['Robin Hood figure', 'Revolutionary hero', 'Wandering do-gooder'],
      colors: {
        primary: 'orange-500',
        secondary: 'orange-200',
        gradient: 'from-orange-600 via-yellow-500 to-amber-400'
      },
      icon: 'pi pi-bolt'
    },
    {
      id: 'lawful-neutral',
      name: 'Lawful Neutral',
      shortName: 'The Judge',
      description: 'Values order, organization, and tradition. Believes in following rules and hierarchy regardless of personal feelings.',
      characteristics: ['Disciplined', 'Organized', 'Traditional', 'Reliable', 'Systematic'],
      examples: ['City guard captain', 'Dedicated bureaucrat', 'Military officer'],
      colors: {
        primary: 'gray-500',
        secondary: 'gray-200',
        gradient: 'from-gray-600 via-slate-500 to-blue-400'
      },
      icon: 'pi pi-balance-scale'
    },
    {
      id: 'true-neutral',
      name: 'True Neutral',
      shortName: 'The Undecided',
      description: 'Avoids extremes, seeking balance in all things. Makes decisions based on situation rather than ideology.',
      characteristics: ['Balanced', 'Pragmatic', 'Flexible', 'Moderate', 'Realistic'],
      examples: ['Druid protecting nature', 'Neutral mediator', 'Practical farmer'],
      colors: {
        primary: 'purple-500',
        secondary: 'purple-200',
        gradient: 'from-purple-600 via-violet-500 to-indigo-400'
      },
      icon: 'pi pi-circle'
    },
    {
      id: 'chaotic-neutral',
      name: 'Chaotic Neutral',
      shortName: 'The Free Spirit',
      description: 'Values personal freedom above all else. Acts on whim and follows own desires without regard for law or others.',
      characteristics: ['Unpredictable', 'Independent', 'Spontaneous', 'Free', 'Individualistic'],
      examples: ['Wandering bard', 'Treasure hunter', 'Eccentric wizard'],
      colors: {
        primary: 'pink-500',
        secondary: 'pink-200',
        gradient: 'from-pink-600 via-rose-500 to-fuchsia-400'
      },
      icon: 'pi pi-compass'
    },
    {
      id: 'lawful-evil',
      name: 'Lawful Evil',
      shortName: 'The Dominator',
      description: 'Uses law and order to further selfish goals. Believes in hierarchy and control, often becoming tyrants.',
      characteristics: ['Tyrannical', 'Methodical', 'Controlling', 'Organized', 'Ruthless'],
      examples: ['Evil overlord', 'Corrupt noble', 'Ruthless merchant'],
      colors: {
        primary: 'red-700',
        secondary: 'red-200',
        gradient: 'from-red-800 via-red-600 to-orange-500'
      },
      icon: 'pi pi-crown'
    },
    {
      id: 'neutral-evil',
      name: 'Neutral Evil',
      shortName: 'The Malefactor',
      description: 'Purely selfish, doing whatever benefits them most. Neither respects law nor rebels against it.',
      characteristics: ['Selfish', 'Opportunistic', 'Manipulative', 'Calculating', 'Amoral'],
      examples: ['Scheming advisor', 'Crime boss', 'Mercenary leader'],
      colors: {
        primary: 'gray-700',
        secondary: 'gray-300',
        gradient: 'from-gray-800 via-gray-600 to-red-500'
      },
      icon: 'pi pi-eye'
    },
    {
      id: 'chaotic-evil',
      name: 'Chaotic Evil',
      shortName: 'The Destroyer',
      description: 'Driven by greed, hatred, and lust for destruction. Acts on violent impulses and desires.',
      characteristics: ['Destructive', 'Violent', 'Unpredictable', 'Malicious', 'Anarchic'],
      examples: ['Demon lord', 'Mad tyrant', 'Destructive cultist'],
      colors: {
        primary: 'red-900',
        secondary: 'red-300',
        gradient: 'from-red-900 via-red-700 to-black'
      },
      icon: 'pi pi-times-circle'
    }
  ]);

  getAlignmentCardClasses(alignment: Alignment): string {
    const baseClasses = `
      group cursor-pointer backdrop-blur-sm rounded-xl border shadow-xl 
      transition-all duration-300 transform hover:scale-105 overflow-hidden
      bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl
    `;

    if (this.selectedAlignment()?.id === alignment.id) {
      return `${baseClasses} selected-alignment border-2 border-blue-400/60 shadow-blue-400/20`;
    }

    return baseClasses;
  }

  selectAlignment(alignment: Alignment): void {
    if (this.selectedAlignment()?.id === alignment.id) {
      this.selectedAlignment.set(null);
    } else {
      this.selectedAlignment.set(alignment);
    }
  }

  clearSelection(): void {
    this.selectedAlignment.set(null);
  }

  randomAlignment(): void {
    const alignments = this.alignments();
    const randomIndex = Math.floor(Math.random() * alignments.length);
    this.selectedAlignment.set(alignments[randomIndex]);
  }
}
