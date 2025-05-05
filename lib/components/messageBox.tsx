interface Props {
  message: string;
}

function MessageBox({ message }: Props) {
  return (
    <div>
      <span>{message}</span>
    </div>
  );
}

export { MessageBox };
