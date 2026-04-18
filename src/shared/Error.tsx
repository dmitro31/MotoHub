

interface Props {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message = "Щось пішло не так", onRetry }: Props) {
  return (
    <div className=''>
      <div className=''>
        <div>
          <p className=''>Помилка</p>
          <p className=''>{message}</p>
        </div>
        {onRetry && (
          <button className='' onClick={onRetry}>
            Спробувати знову
          </button>
        )}
      </div>
    </div>
  );
}