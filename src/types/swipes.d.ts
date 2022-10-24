// to do: come back and figure out how to implement these

interface CreateSwipe {
  swiped_dog_id: number;
  is_interested: boolean;
}

interface SwipesState {
  past_swipes: Swipe[];
  available_swipes: Swipe[];
  current_swipe: Swipe | null;
}

interface Swipe {
  creation_time: string;
  dog_id: number;
  is_interested: boolean;
  swipe_id: number;
  swiped_dog_id: number;
}
