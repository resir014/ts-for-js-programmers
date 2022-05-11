interface Component<P = {}> {
  render: (props: P & { children: string }) => void;
}

const comp: Component<{ displayName: string }> = {
  render: ({ displayName }) => `Hello, ${displayName}`,
};
