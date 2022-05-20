import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import {useState} from 'react';
import Cat from './data/cat';
import catData from './data/catData';
import CatCard from './components/cat_card';
import { v4 as uuidv4 } from 'uuid';

import Dog from './data/dog';
import dogData from './data/dog-data';
import DogCard from './components/dog_card';


function App() {
	// JavaScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	 console.log("Our pretties 😻: ", cats)
	 const catCount = cats.length;
	 console.log(catCount)
	 const [dogs, setDogs ] = useState<Array<Dog>>(dogData);
	 const dogCount = dogs.length;

	return (
		<>
			<Navbar />
			<Header dogCount={dogCount}  catCount={catCount} />

			<main>
				<div className='cards__wrapper'>{cats.map((cat,index) => <CatCard 
			key={cat.id}
			name={cat.name}
			species={cat.species}
			favFoods={cat.favFoods}
			birthYear={cat.birthYear}
			catIndex={index}
		/> )}</div>
		<div className='cards__wrapper'>{dogs.map((dog,index) => <DogCard 
			key={dog.id}
			name={dog.name}
			species={dog.species}
			favFoods={dog.favFoods}
			birthYear={dog.birthYear}
			dogIndex={index}
		/> )}</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
