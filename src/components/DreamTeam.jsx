import '../styles/DreamTeamStyles.css'

function DreamTeam() {
  return (
    <div>
      <h1>LA DREAM TEAM</h1>
      <div className="dreamteam">
        <div className="people">
          <img src="https://via.placeholder.com/150x150?text=Photo1" />
          <div>Nom 1</div>
        </div>
        <div className="people">
          <img src="https://via.placeholder.com/150x150?text=Photo2" />
          <div>Nom 2</div>
        </div>
        <div className="people">
          <img src="https://via.placeholder.com/150x150?text=Photo3" />
          <div>Nom 3</div>
        </div>
      </div>
    </div>
  );
}

export default DreamTeam