import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
import { useDispatch } from 'react-redux';
import { fetchNotices } from '../../../redux/notices/operations ';
import { setCategory } from '../../../redux/notices/noticesSlice';
import { useEffect } from 'react';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchFavoriteNotices } from '../../../redux/notices/operations ';

const NoticesAuthNav = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { search } = useSelector(selectNoticesObj);

  useEffect(() => {
    if (!categoryName) {
      navigate('/notices/sell');
      // dispatch(fetchNotices({ category: '/notices/sell' }));
    }
  }, [categoryName, dispatch, navigate, pathname]);

  useEffect(() => {
    if (!categoryName) {
      return;
    }
    if (pathname === '/notices/favorite') {
      dispatch(fetchNotices({ category: pathname, search, limit: 1000 }));
    } else {
      dispatch(fetchNotices({ category: pathname, search }));
    }
  }, [pathname, dispatch, search, categoryName]);

  useEffect(() => {
    dispatch(setCategory(categoryName));
  }, [dispatch, categoryName]);

  useEffect(() => {
    if (!categoryName) {
      return;
    }
    dispatch(fetchFavoriteNotices({}));
  }, [categoryName, dispatch]);

  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="favorite">
            favorite ads
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="own">my ads</NoticesCategoriesLink>
        </li>

        <li>
          <NoticesCategoriesLink to="for-free">
            in good hands
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="lost-found">
            lost/found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="sell">sell</NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
