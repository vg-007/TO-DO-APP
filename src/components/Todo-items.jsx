import Item from "./TaskAdd";
const Todoitems = ({items}) => {
    return (
        <>
            <div className="item">
                {items.map((item) => (
                    <Item taskname={item.taskname} date={item.lastdate}></Item>
                ))}
            </div>
        </>
    );

};
export default Todoitems;