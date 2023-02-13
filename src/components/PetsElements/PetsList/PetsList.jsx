import { useSelector, useDispatch } from 'react-redux';
import ClockLoader from 'react-spinners/ClockLoader';
import { toast } from 'react-toastify';

import { deletePet } from '../../../redux/pets/operations';
import {
  selectPets,
  selectIsDeleting,
  selectPetToDeleteId,
} from '../../../redux/pets/selectors';
import { optionsToast, colors } from '../../../styles/stylesLayout';

import {
  PetsContainer,
  PetsItem,
  PetImage,
  PetDescription,
  PetTag,
  PetButtonDelete,
} from './PetsList.styled';

import { ReactComponent as PetButtonIconDelete } from '../../../img/icons/petButtonDelete.svg';
import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';

const PetsList = () => {
  const { pets } = useSelector(selectPets);

  const isDeleting = useSelector(selectIsDeleting);
  const petToDeleteId = useSelector(selectPetToDeleteId);

  const dispatch = useDispatch();

  function handleDeletePet(petId) {
    dispatch(deletePet(petId))
      .unwrap()
      .then(() => toast.success('Pet was was deleted.', optionsToast))
      .catch(err => {
        console.log(err);
        toast.error('Error occured. Pet deleting not completed.', optionsToast);
      });
  }

  return (
    <PetsContainer>
      {pets.map(({ _id, photoURL, name, birthday, breed, comments }) => (
        <PetsItem key={_id}>
          <PetImage
            src={photoURL ? photoURL : notFoundNoticesImage}
            alt={name}
          />

          <PetDescription>
            <PetButtonDelete
              onClick={() => handleDeletePet(_id)}
              disabled={isDeleting && petToDeleteId === _id}
            >
              {isDeleting && petToDeleteId === _id ? (
                <ClockLoader size={25} color={colors.accent} />
              ) : (
                <PetButtonIconDelete />
              )}
            </PetButtonDelete>

            <div>
              <PetTag>
                <span>Name:</span>
                {name}
              </PetTag>
              <PetTag>
                <span>Date of birth:</span>
                {birthday}
              </PetTag>
              <PetTag>
                <span>Breed:</span>
                {breed}
              </PetTag>
              <PetTag>
                <span>Comments:</span>
                <p>{comments}</p>
              </PetTag>
            </div>
          </PetDescription>
        </PetsItem>
      ))}
    </PetsContainer>
  );
};

export default PetsList;
