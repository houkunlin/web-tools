import { Client } from 'stompjs';
import { useCallback, useState } from "react";

interface State {
  // Stomp客户端
  client: Client | null;
  // 是否正在连接
  connecting: boolean;
}

const initialState: State = {
  client: null,
  connecting: false,
}

export default () => {
  // Stomp连接状态
  const [state, setState] = useState(initialState);

  const setClient = useCallback((client: Client | null) => {
    setState({ ...state, client })
  }, []);

  return {
    state,
    setState,
    setClient
  }
};
