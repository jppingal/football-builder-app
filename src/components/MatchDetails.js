import React, { useState, useEffect } from 'react';
import "./index.css";

const MatchDetails = (props) => {
	const [matchDetails, setMatchDetails] = useState()
	useEffect(() => {
		console.log("Props-ReceiveMatchDetails1", { propsFilterItem })
		if (!!propsFilterItem) {
			setMatchDetails(propsFilterItem)
		}
	}, [])
	const { propsFilterItem } = props.location

	console.log("Props-ReceiveMatchDetails2", matchDetails)
	return (
		<div className="matchDetail-container">
			{/* {matchDetails.map((elem) => {
				return (
					<> */}
			<div className='match-content' >
				<div className='match-name'>
					<h1>MatchName</h1>
					<h3>Country</h3>
				</div>
				<div className='match-details'>
					<div className='match'>
						<div className='match'>
							<div className='match-place'>
								<h3>Match Id</h3>
								<h3>MatchId</h3>
							</div>

							<div className='match-place'>
								<h3>MatchTime</h3>
								<h3>MatchTime</h3>
							</div>
						</div>
					</div>
					<div className='match'>
						<div>
							<h4>Team1Name</h4>
							<h4>Team1Name</h4>
						</div>
						<div>
							<h4>Team2Name</h4>
							<h4>Team2Name</h4>
						</div>
					</div>
				</div>
			</div>
			{/* </>
				)
			})} */}
		</div>
	);
}

export default MatchDetails;