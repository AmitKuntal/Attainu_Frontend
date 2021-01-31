import City from './components/city';
import data from './../../cities.json';

export default function Cities(){
    console.log(data);
    return (
    <div className="cities">
    {data.map((city)=><City key={city.id} {...city}/>)}
    </div>)
}