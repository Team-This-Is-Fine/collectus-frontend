import CollectionList from "../collectionList/CollectionList";
import { CollectionsContext } from '../../CollectionsContext';

export default function Home()
{
  return (
    <div className="home-container">
      <p>Home loaded</p>
      <CollectionsContext.Provider value={{}}>
        <CollectionList />
      </CollectionsContext.Provider>
    </div >
  )
}