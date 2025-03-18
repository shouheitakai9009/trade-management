# React

React でのコーディングにおける一般的なベストプラクティスをまとめます。

## 方針

-
- コードのコメントとして、そのファイルがどういう仕様化を可能な限り明記する

## 一般的なルール

1. コンポーネントを純関数に保つ

コンピュータサイエンス（特に関数型プログラミングの世界）では、純関数 (pure function) とは、以下のような特徴を持つ関数のことを指します。

- 呼び出される前に存在していたオブジェクトや変数を変更しない。
- 同じ入力を与えると、純関数は常に同じ結果を返す。
- レンダーはいつでも起こる可能性があるため、コンポーネントは相互の呼び出し順に依存してはいけない。
- コンポーネントがレンダーに使用する入力値を書き換えない。これには props、state、コンテクストが含まれる。画面を更新するためには既存のオブジェクトを書き換えるのではなく、代わりに state をセットする。
- コンポーネントのロジックはできるだけコンポーネントが返す JSX の中で表現する。何かを「変える」必要がある場合、通常はイベントハンドラで行- う。最終手段として useEffect を使用する。
- 純関数を書くことには訓練が必要だが、それにより React パラダイムの威力が発揮される。

```jsx
// NG
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

// OK
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

2. 基本的に useEffect を使ってはならない

- レンダーのためのデータ変換にエフェクトは必要ありません

例えば、表示する前にリストをフィルタリングしたいとします。リストが変更されたときに state 変数を更新するようなエフェクトを書きたくなるかもしれません。しかし、これは非効率的です。state を更新すると、React はまず、画面の表示内容を計算するためにコンポーネントの関数を呼び出します。次に、React はこれらの変更を DOM に “コミット” して、画面を更新します。その後、React はエフェクトを実行します。ここであなたのエフェクトがまた直ちに state を更新してしまうと、このプロセス全体が最初からやり直しになってしまいます！ 不要なレンダーを避けるために、コンポーネントのトップレベルですべてのデータを変換するようにしましょう。そのコードは、props や state が変更されるたびに自動的に再実行されます。

- ユーザイベントの処理にエフェクトは必要ありません。

例えば、ユーザが製品を購入したときに /api/buy POST リクエストを送信し、通知を表示したいとします。購入ボタンのクリックイベントハンドラでは、何が起こったかが正確にわかります。エフェクトが実行される時点では、ユーザが何をしたのか（例えば、どのボタンがクリックされたのか）はもうわかりません。したがって、通常は対応するイベントハンドラでユーザイベントを処理するべきです。

- props または state に基づいて state を更新するためにエフェクトは必要ありません

```jsx
// NG
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);
  // ...
}

// OK
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");
  // ✅ Good: calculated during rendering
  const fullName = firstName + " " + lastName;
  // ...
}
```

- 重たい計算のキャッシュを解消するためにエフェクトは必要ありません

```jsx
// NG
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);
}

// OK
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  // ✅ Does not re-run getFilteredTodos() unless todos or filter change
  const visibleTodos = useMemo(
    () => getFilteredTodos(todos, filter),
    [todos, filter]
  );
  // ...
}
```

- props が変更されたときにすべての state をリセットするためにエフェクトは必要ありません

```jsx
// NG
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [userId]);
  // ...
}

// OK
export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
```

- props が変更されたときに一部の state を調整するためにエフェクトは必要ありません

```jsx
// NG
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
  // ...
}

// OK
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // ✅ Best: Calculate everything during rendering
  const selection = items.find((item) => item.id === selectedId) ?? null;
  // ...
}
```

- POST リクエストの送信をするためにエフェクトは必要ありません

```jsx
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  // 🔴 Avoid: Event-specific logic inside an Effect
  const [jsonToSubmit, setJsonToSubmit] = useState(null);
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    setJsonToSubmit({ firstName, lastName });
  }
  // ...
}
```

- 親にデータを渡すためにエフェクトは必要ありません

```jsx
// NG
function Parent() {
  const [data, setData] = useState(null);
  // ...
  return <Child onFetched={setData} />;
}

function Child({ onFetched }) {
  const data = useSomeAPI();
  // 🔴 Avoid: Passing data to the parent in an Effect
  useEffect(() => {
    if (data) {
      onFetched(data);
    }
  }, [onFetched, data]);
  // ...
}

// OK
function Parent() {
  const [data, setData] = useState(null);
  // ...
  return <Child onFetched={setData} />;
}

function Child({ onFetched }) {
  const data = useSomeAPI();
  // 🔴 Avoid: Passing data to the parent in an Effect
  useEffect(() => {
    if (data) {
      onFetched(data);
    }
  }, [onFetched, data]);
  // ...
}
```

- まとめ

  - レンダー中に計算できるものであれば、エフェクトは必要ない。
  - 重たい計算をキャッシュするには、useEffect の代わりに useMemo を追加する。
  - コンポーネントツリー全体の state をリセットするには、異なる key を渡す。
  - prop の変更に応じて一部の state をリセットする場合、レンダー中に行う。
  - コンポーネントが表示されたために実行されるコードはエフェクトに、それ以外はイベントハンドラに入れる。
  - 複数のコンポーネントの state を更新する必要がある場合、単一のイベントで行うことが望ましい。
  - 異なるコンポーネントの state 変数を同期しようと思った際は、常に state のリフトアップを検討する。
  - エフェクトでのデータフェッチは可能だが、競合状態を回避するためにクリーンアップを実装する必要がある。
