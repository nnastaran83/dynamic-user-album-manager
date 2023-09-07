import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };


    const header = <>
        <Button className="m-2" onClick={ handleRemoveAlbum } >
            <GoTrash />
        </Button>
        { album.title }
    </>;

    return (

        <ExpandablePanel key={ album.id } header={ header }>
            List of photos in the album
        </ExpandablePanel>
    );
}

export default AlbumsListItem;