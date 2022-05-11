interface User {
  name: string;
}

interface Session {
  user?: User;
}

function getDisplayName(session?: Session) {
  return session?.user?.name;
}
