type Seller = { name: string, email: string, avatar: string }
const SellerCard = ({ name, email, avatar }:Seller) => {

    const placeholder = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    return (
        <div className="flex items-center border border-gray-600 p-[10px] border-2 w-[max-content]">
            < img className="w-[80px] h-[80px] object-cover rounded-full" src={avatar ? avatar : placeholder} alt="Seller avatar" />
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">{name}</h3>
                <p>{email}</p>
            </div>
        </div >

    );
}

export default SellerCard