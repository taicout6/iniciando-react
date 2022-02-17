type TweetProps = {
  text: string;
}

export function Tweet(props: TweetProps) {
  return (
    <div>
      <h2>{ props.text }</h2>
    </div>
  );
}