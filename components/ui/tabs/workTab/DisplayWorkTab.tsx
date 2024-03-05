import { Tab } from "@/libs/fakeData/fakeData";

interface ItemProps {
  item: Tab;
}


const DisplayWorkTab: React.FC<ItemProps> = ({ item }) => {
  return (
    <div  >
      <h2>
        {item.title}
      </h2>
    </div>
  )
}

export default DisplayWorkTab