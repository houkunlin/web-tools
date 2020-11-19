import { Client } from 'stompjs';
import { useCallback, useState } from 'react';

interface State {
  // Stomp客户端
  client: Client | null;
  // 是否正在连接
  connecting: boolean;
}

export default () => {
  // Stomp连接状态
  const [state, setState] = useState<State>({
    client: null,
    connecting: false,
  });

  const setClient = useCallback(
    (client: Client | null) => {
      setState({ ...state, client });
    },
    [state],
  );

  return {
    state,
    setState,
    setClient,
  };
};
