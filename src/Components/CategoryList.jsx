import MenuItem from "./MenuItem";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CategoryList = ({ lists, showList, setShowList }) => {
    return (
        <div className="category font-bold border-b-4  duration-300 cursor-pointer">
            <div
                className="font-semibold text-base uppercase pt-4 pb-2  duration-300"
                onClick={() => {
                    console.log("clicking the category", showList);
                    setShowList(() => {
                        console.log("previous showlist", showList);

                        console.log(
                            "new Showlist",
                            showList === null
                                ? lists.title
                                : showList === lists.title
                                  ? null
                                  : lists.title,
                        );

                        return showList === null // everything is closed
                            ? lists.title // then open the category which i clicked on.
                            : showList === lists.title // that means some category is open.
                              ? null // if i click on same category which is opened then close it
                              : lists.title; // if i click on some other category which is not open then set that category title to the showList variable.
                    });
                    console.log("showlist", showList);
                }}
            >
                <span>{lists.title}</span>
            </div>
            {lists.title === showList &&
                lists.itemCards.map((menuItem) => (
                    <>
                        <MenuItem
                            key={menuItem.card.info.name}
                            menuItemInfo={menuItem.card.info}
                        />
                    </>
                ))}
        </div>
    );
};

export default CategoryList;
