import Image from "next/image"
import Link from "next/link"
import DeleteButton from "./DeleteButton";

interface PostProps {
    id: string,
    author: string,
    authorEmail?: string,
    date: string,
    thumbnail?: string,
    category?: string,
    title: string,
    content: string,
    links?: string[]
}


export default function Post({
    id,
    author,
    authorEmail,
    date,
    thumbnail,
    category,
    title,
    content,
    links
}: PostProps) {

    const isEditable = true;
    return (
        <div>
            <div>
                Posted By : <span className="font-bold ">{author}</span> on <span>{date}</span>
            </div>

            <div className="w-full h-72 relative">
                {thumbnail ? (
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover rounded-md object-center"
                    />
                ) : (
                    <Image
                        src={"/thumbnail-placeholder.jpeg"}
                        alt={title}
                        fill
                        className="object-cover rounded-md object-center"
                    />
                )}
            </div>

            <button className="cbtn mt-3 ml-2">{category}</button>
            <h1 className="text-2xl font-bold m-3 ">{title}</h1>
            <p className="m-3">{content}</p>
            <div className="flex flex-col gap-3 text-blue-900/75 hover:underline">

                {links && links?.map((link, index) =>
                    <div key={index} className="flex gap-2 items-center font-bold">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                        </div>

                        <Link className="max-w-full  overflow-hidden text-ellipsis" href={`${link}`}>
                            {link}
                        </Link>
                    </div>
                )}
            </div>

            {isEditable && (<div className="mt-5">
                <Link className="editbtn" href={`/edit-post/${id}`}>Edit</Link>
                <span className="deletebtn"><DeleteButton /></span>
            </div>)}

            <div className="border m-8"></div>


        </div>

    )
}



