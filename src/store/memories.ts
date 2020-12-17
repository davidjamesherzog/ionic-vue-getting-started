// import { createModule, mutation, action } from 'vuex-class-component';
import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';

@Module({ generateMutationSetters: true })
export default class Music extends VuexModule {
  // state
  public title = 'test-memories';
  public _memories: Array<any> = [
    {
      id: 'm1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
      title: 'A trip into the mountains',
      description: 'It was a really nice trip!',
    },
    {
      id: 'm2',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
      title: 'Surfing the sea side',
      description: 'Feeling the cool breeze',
    },
    {
      id: 'm3',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
      title: 'Good eating',
      description: 'Really tasty!',
    },
  ];

  // getters
  get memories(): Array<any> {
    return this._memories;
  }

  get memory(): any {
    return (memoryId: string) => {
      return this.memories.find((memory) => memory.id === memoryId);
    };
  }

  // mutations
  @Mutation
  public add(memoryData: any) {
    const newMemory = {
      id: new Date().toISOString(),
      title: memoryData.title,
      image: memoryData.imageUrl,
      description: memoryData.description
    };

    this._memories.unshift(newMemory);
  }

  // actions
  @Action
  public async addMemory(memoryData: any): Promise<void> {
    this.add(memoryData);
  }
}