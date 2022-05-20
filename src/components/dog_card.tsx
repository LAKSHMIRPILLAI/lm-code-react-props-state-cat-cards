import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import dog3 from '../assets/images/dog3.jpg';

import DogImage from './dog_image';
interface DogCardProps{
	name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    dogIndex: number;
 }

 const images = [
	{
		image: dog1,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'amblin',
		attributionUrl: 'https://www.flickr.com/people/amblin/'
	},
	{
		image: dog2,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-SA 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
		attributionName: 'ivva',
		attributionUrl: 'https://www.flickr.com/people/ivva/'
	},
	{
		image: dog3,
		altText: 'Describe this dog!',
		licenceType: 'CC BY-ND 2.0',
		licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
		attributionName: 'Rachele Pettarelli Ph',
		attributionUrl: 'https://www.flickr.com/people/rachephotos/'
	}]


 const DogCard: React.FC<DogCardProps> = ({ name, species, favFoods, birthYear, dogIndex }) => {

	return (
		<div className='card'>
			<h3 className='card__text card__header'>{name}</h3>
			<p className='card__text'>Species: {species}</p>
			<p className='card__text'>Favourite Food(s): {favFoods}</p>
			<p className='card__text'>Birth Year:{birthYear}</p>
			{dogIndex < images.length && (
				<DogImage
					image={images[dogIndex].image}
					altText={images[dogIndex].altText}
					licenceType={images[dogIndex].licenceType}
					licenceUrl={images[dogIndex].licenceUrl}
					attributionName={images[dogIndex].attributionName}
					attributionUrl={images[dogIndex].attributionUrl}
				/>
			)}
		</div>
	);
};

export default DogCard;