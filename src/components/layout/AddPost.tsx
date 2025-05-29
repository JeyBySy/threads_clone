import { navIcons } from "../../utils/navIcons";

const AddPost = () => {
    const createIcon = navIcons.find(icon => icon.name === "Create");
    return (
        <button className='fixed bottom-6 right-6 bg-accent py-5 px-7 border border-muted rounded-xl'>
            {createIcon && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={createIcon.viewBox}
                    className="w-6 h-6 fill-white stroke-white "
                >
                    <path d={createIcon.icon} />
                </svg>
            )}
        </button>
    )
}

export default AddPost