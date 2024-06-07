
const Error = ({ message }) => {
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5">
        <p>Üzgünüz bir hata oluştu :~( </p>
      <h3 className="font-semibold">{message} </h3>
    </div>
  )
}

export default Error
