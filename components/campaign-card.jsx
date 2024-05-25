import Image from "next/image";

const CampaignCard = ({ title, amount, date, image }) => {
    return <div className="p-4 bg-white shadow-lg rounded-lg relative">
        <Image 
            src={image}
            width={300}
            height={180}
            className="object-contain"
        />

        <div className="absolute bottom-0 right-0 p-4 bg-primary-orange text-white font-medium w-full rounded-b-lg rounded-tl-3xl">
            <h1 className="">{title}</h1>
            <h2>Amount - {amount} Matic</h2>
            <h3>Published on {date}</h3>
        </div>
    </div>
}

export default  CampaignCard;