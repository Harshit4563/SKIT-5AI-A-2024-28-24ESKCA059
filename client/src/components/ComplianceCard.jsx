function ComplianceCard() {

  const value = 87;

  return (
    <div className="compliance-card">

      <h2>Safety Compliance</h2>

      <h1>{value}%</h1>

      <div className="progress">

        <div
          className="progress-fill"
          style={{ width: value + "%" }}
        ></div>

      </div>

      <p>Overall PPE compliance score</p>

    </div>
  );
}

export default ComplianceCard;