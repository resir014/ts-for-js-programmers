type LivestreamEvent<Listener extends string, Event extends {}> = {
  id: number;
  type: Listener;
  event: Event & { displayName: string };
};

type LivestreamEvents =
  | LivestreamEvent<'tip', { amount: number; message: string }>
  | LivestreamEvent<'follow', {}>
  | LivestreamEvent<
      'subscriber',
      {
        amount: number;
        message: string;
        tier: '1000' | '2000' | '3000' | 'prime';
      }
    >;

function handleEvent(e: LivestreamEvents) {
  switch (e.type) {
    case 'follow': {
      e.event.displayName;
      break;
    }
    case 'subscriber': {
      e.event.tier;
      break;
    }
    case 'tip': {
      e.event.amount;
      break;
    }
    default: {
      break;
    }
  }
}
