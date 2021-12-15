import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating'
import { detailsSchool } from '../actions/schoolActions';
import { detailsClub } from '../actions/clubActions';
import { listReviews } from './../actions/reviewActions';
import Review from '../components/Review'
import Difficulty from './../components/Difficulty';
import Footer from './../components/Footer';
import Header from './../components/Header';

export default function ClubScreen(props) {
    const dispatch = useDispatch()
    const schoolId = props.match.params.schoolId;
    const clubId = props.match.params.clubId;

    const [filterOption, setfilterOption] = useState('all');

    const schoolDetails = useSelector(state => state.schoolDetails);
    const { loading, error, school } = schoolDetails;

    useEffect(() => {
        dispatch(detailsSchool(schoolId));
    }, [dispatch, schoolId]);

    const clubDetails = useSelector(state => state.clubDetails);
    const { loadingClub, errorClub, club } = clubDetails;

    useEffect(() => {
        dispatch(detailsClub(clubId));
    }, [dispatch, clubId]);

    const reviewList = useSelector(state => state.reviewList);
    const { loadingReviews, errorReviews, reviews } = reviewList;

    useEffect(() => {
        dispatch(listReviews(clubId));
    }, [dispatch, clubId]);

    let history = useHistory();

    const interviewButtonHandler = () => {
        let path = `/interview/${schoolId}/${clubId}`;
        history.push(path);
    }

    const writeReviewButtonHandler = () => {
        //change path
        let path = `/review/post/${schoolId}/${clubId}`;
        history.push(path);
    }

    //window size system
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return (
        <div className="grid-container" style={{}}>
            <Header></Header>
            <main>
                <div>
                    {(loading || loadingClub || loadingReviews) ? <LoadingBox></LoadingBox> :
                        (error || errorClub || errorReviews) ? <MessageBox variant="danger">{error}</MessageBox> :
                            windowWidth > 930 ?
                                (<div>
                                    <div class="row top" style={{ flexWrap: "nowrap" }}>
                                        <div class="col-1" >
                                            <div>
                                                <div className="school-info">
                                                    <Link to={`/school/${schoolId}`}>
                                                        <div className="link-back" style={{ marginBottom: "0.5rem" }}> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to {school.name}</div>
                                                    </Link>
                                                    <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>{club.name}</h2>
                                                    <Rating rating={club.totalRating / club.numReviews} numReviews={club.numReviews}></Rating>
                                                    <Difficulty difficulty={club.numInterviews === 0 ? 0 : (club.totalDifficulty / club.numInterviews)} clubScreen={true}></Difficulty>
                                                    <p>~ Hours of work / week: {club.numReviews === 0 ? 0 : (Math.round((club.totalTimeCommitment / club.numReviews) * 10) / 10)}</p>
                                                    <p style={{ marginTop: "1rem" }}>Noted an application process</p>
                                                    <div className="recommend-bar-container">
                                                        {club.numInterviews === 0 ? (
                                                            <div className="empty-recommend-bar">
                                                                <div className="recommend-percent">
                                                                    0%
                                                                </div>
                                                            </div>
                                                        ) : club.numInterviews > club.numReviews ? (
                                                            <div className="recommend-bar" style={{ width: (16 + "rem") }}>
                                                                <div className="recommend-percent">
                                                                    100%
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="recommend-bar" style={{ width: ((club.numInterviews / club.numReviews) * 16 + "rem") }}>
                                                                <div className="recommend-percent">
                                                                    {(Math.trunc(club.numInterviews / club.numReviews * 100) + "%")}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p style={{ marginTop: "1rem" }}>Would recommend to a friend</p>
                                                    <div className="recommend-bar-container">
                                                        {club.totalRecommend === 0 ? (
                                                            <div className="empty-recommend-bar">
                                                                <div className="recommend-percent">
                                                                    0%
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="recommend-bar" style={{ width: ((club.totalRecommend / club.numReviews) * 16 + "rem") }}>
                                                                <div className="recommend-percent">
                                                                    {(Math.trunc(club.totalRecommend / club.numReviews * 100) + "%")}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="spacer"> _________________________</p>
                                                <button onClick={() => { writeReviewButtonHandler() }} className="write">
                                                    <div>Create a post!</div>
                                                </button>
                                                <div>
                                                    <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "-1rem" }}>Filter Options</p>
                                                    <div className="filter-row">
                                                        <input
                                                            type='radio'
                                                            value="all"
                                                            checked={filterOption === "all"}
                                                            onChange={(e) => setfilterOption(e.target.value)}
                                                        />
                                                        <p className="location" style={{ paddingTop: "0.3rem" }}>All</p>
                                                    </div>
                                                    <div className="filter-row">
                                                        <input
                                                            type='radio'
                                                            value="5"
                                                            checked={filterOption === "5"}
                                                            onChange={(e) => setfilterOption(e.target.value)}
                                                        />
                                                        <p className="location" style={{ paddingTop: "0.3rem" }}>5 Stars</p>
                                                    </div>
                                                    <div className="filter-row">
                                                        <input
                                                            type='radio'
                                                            value="4"
                                                            checked={filterOption === "4"}
                                                            onChange={(e) => setfilterOption(e.target.value)}
                                                        />
                                                        <p className="location" style={{ paddingTop: "0.3rem" }}>4 Stars</p>
                                                    </div>
                                                    <div className="filter-row">
                                                        <input
                                                            type='radio'
                                                            value="3"
                                                            checked={filterOption === "3"}
                                                            onChange={(e) => setfilterOption(e.target.value)}
                                                        />
                                                        <p className="location" style={{ paddingTop: "0.3rem" }}>3 Stars</p>
                                                    </div>
                                                    <div className="filter-row">
                                                        <input
                                                            type='radio'
                                                            value="2"
                                                            checked={filterOption === "2"}
                                                            onChange={(e) => setfilterOption(e.target.value)}
                                                        />
                                                        <p className="location" style={{ paddingTop: "0.3rem" }}>2 Stars</p>
                                                    </div>
                                                    <div className="filter-row">
                                                        <input
                                                            type='radio'
                                                            value="1"
                                                            checked={filterOption === "1"}
                                                            onChange={(e) => setfilterOption(e.target.value)}
                                                        />
                                                        <p className="location" style={{ paddingTop: "0.3rem" }}>1 Star</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div>
                                                <div class="reviewButtonRow top">
                                                    <button onClick={() => { console.log("stay on review page") }} className="primary block sike">
                                                        <div>Reviews</div>
                                                    </button>
                                                    <button onClick={() => { interviewButtonHandler() }} className="primary block">
                                                        <div>Application Process</div>
                                                    </button>
                                                </div>
                                            </div>
                                            {reviews.map(review => (
                                                <Review key={review._id} review={review} filterOption={filterOption}></Review>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                ) :
                                (
                                    <div style={{ marginTop: "4rem" }}>
                                        <div class="row top" >
                                            <div class="col-1" style={{ marginRight: "auto", marginLeft: "auto", marginBottom: "1rem" }}>
                                                <div>
                                                    <div className="school-info">
                                                        <Link to={`/school/${schoolId}`}>
                                                            <div className="link-back" style={{ marginBottom: "0.5rem" }}> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to {school.name}</div>
                                                        </Link>
                                                        <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>{club.name}</h2>
                                                        <Rating rating={club.totalRating / club.numReviews} numReviews={club.numReviews}></Rating>
                                                        <Difficulty difficulty={club.numInterviews === 0 ? 0 : (club.totalDifficulty / club.numInterviews)} clubScreen={true}></Difficulty>
                                                        <p>~ Hours of work / week: {club.numReviews === 0 ? 0 : (Math.round((club.totalTimeCommitment / club.numReviews) * 10) / 10)}</p>
                                                        <p style={{ marginTop: "1rem" }}>Noted an application process</p>
                                                        <div className="recommend-bar-container">
                                                            {club.numInterviews === 0 ? (
                                                                <div className="empty-recommend-bar">
                                                                    <div className="recommend-percent">
                                                                        0%
                                                                    </div>
                                                                </div>
                                                            ) : club.numInterviews > club.numReviews ? (
                                                                <div className="recommend-bar" style={{ width: (16 + "rem") }}>
                                                                    <div className="recommend-percent">
                                                                        100%
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="recommend-bar" style={{ width: ((club.numInterviews / club.numReviews) * 16 + "rem") }}>
                                                                    <div className="recommend-percent">
                                                                        {(Math.trunc(club.numInterviews / club.numReviews * 100) + "%")}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p style={{ marginTop: "1rem" }}>Would recommend to a friend</p>
                                                        <div className="recommend-bar-container">
                                                            {club.totalRecommend === 0 ? (
                                                                <div className="empty-recommend-bar">
                                                                    <div className="recommend-percent">
                                                                        0%
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="recommend-bar" style={{ width: ((club.totalRecommend / club.numReviews) * 16 + "rem") }}>
                                                                    <div className="recommend-percent">
                                                                        {(Math.trunc(club.totalRecommend / club.numReviews * 100) + "%")}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className="spacer"> _________________________</p>
                                                    <button onClick={() => { writeReviewButtonHandler() }} className="write">
                                                        <div>Create a post!</div>
                                                    </button>
                                                    <div>
                                                        <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "-1rem" }}>Filter Options</p>
                                                        <div className="filter-row">
                                                            <input
                                                                type='radio'
                                                                value="all"
                                                                checked={filterOption === "all"}
                                                                onChange={(e) => setfilterOption(e.target.value)}
                                                            />
                                                            <p className="location" style={{ paddingTop: "0.3rem" }}>All</p>
                                                        </div>
                                                        <div className="filter-row">
                                                            <input
                                                                type='radio'
                                                                value="5"
                                                                checked={filterOption === "5"}
                                                                onChange={(e) => setfilterOption(e.target.value)}
                                                            />
                                                            <p className="location" style={{ paddingTop: "0.3rem" }}>5 Stars</p>
                                                        </div>
                                                        <div className="filter-row">
                                                            <input
                                                                type='radio'
                                                                value="4"
                                                                checked={filterOption === "4"}
                                                                onChange={(e) => setfilterOption(e.target.value)}
                                                            />
                                                            <p className="location" style={{ paddingTop: "0.3rem" }}>4 Stars</p>
                                                        </div>
                                                        <div className="filter-row">
                                                            <input
                                                                type='radio'
                                                                value="3"
                                                                checked={filterOption === "3"}
                                                                onChange={(e) => setfilterOption(e.target.value)}
                                                            />
                                                            <p className="location" style={{ paddingTop: "0.3rem" }}>3 Stars</p>
                                                        </div>
                                                        <div className="filter-row">
                                                            <input
                                                                type='radio'
                                                                value="2"
                                                                checked={filterOption === "2"}
                                                                onChange={(e) => setfilterOption(e.target.value)}
                                                            />
                                                            <p className="location" style={{ paddingTop: "0.3rem" }}>2 Stars</p>
                                                        </div>
                                                        <div className="filter-row">
                                                            <input
                                                                type='radio'
                                                                value="1"
                                                                checked={filterOption === "1"}
                                                                onChange={(e) => setfilterOption(e.target.value)}
                                                            />
                                                            <p className="location" style={{ paddingTop: "0.3rem" }}>1 Star</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                {windowWidth > 594 ? (

                                                    <div class="reviewButtonRow top">
                                                        <button onClick={() => { console.log("stay on review page") }} className="primary block sike">
                                                            <div>Reviews</div>
                                                        </button>
                                                        <button onClick={() => { interviewButtonHandler() }} className="primary block">
                                                            <div>Application Process</div>
                                                        </button>
                                                    </div>

                                                ) : (
                                                    <div class="reviewButtonRow top">
                                                        <button onClick={() => { console.log("stay on review page") }} className="primary block sike">
                                                            <div style={{ height: "3.7rem", lineHeight: "3.7rem" }}>Reviews</div>
                                                        </button>
                                                        <button onClick={() => { interviewButtonHandler() }} className="primary block">
                                                            <div style={{ height: "3.7rem" }}>Application Process</div>
                                                        </button>
                                                    </div>

                                                )}
                                                {reviews.map(review => (
                                                    <Review key={review._id} review={review} filterOption={filterOption}></Review>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                    }
                </div >
            </main>
            <Footer></Footer>
        </div>
    )
}

