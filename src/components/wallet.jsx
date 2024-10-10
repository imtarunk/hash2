import { useParams } from "react-router-dom"

const Wallet = ({ walletPublicKey }) => {
  console.log(walletPublicKey);

  return (
    <div className="bg-red">
      <h1>walletPublicKey</h1>
    </div>
  )
}
export default Wallet