function ErrorMessage({items}) {
  
  return <>{items.length === 0 && <h1>im hungry</h1>}</>;
}

export default ErrorMessage;
