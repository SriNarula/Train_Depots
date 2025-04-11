import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DepotDetail.css";

const DepotDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [depot, setDepot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepotDetails = async () => {
      try {
        const res = await fetch(http://localhost:8080/api/depots/${id});

        if (!res.ok) {
          throw new Error('Error: ${res.status}');
        }

        const data = await res.json();
        console.log("Fetched Depot Data:", data);

        if (!data || !data.location) {
          throw new Error("Missing essential data properties");
        }

        setDepot(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch depot details:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDepotDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!depot) return <p>No depot found.</p>;

  // Check if washing line has meaningful data
  const showWashingLine =
    depot?.washingLine &&
    ((depot.washingLine.capacity && depot.washingLine.capacity !== 0) ||
      (Array.isArray(depot.washingLine.techniques) &&
        depot.washingLine.techniques.length > 0) ||
      (Array.isArray(depot.washingLine.features) &&
        depot.washingLine.features.length > 0));

  // Check if sick line has meaningful data
  const showSickLine =
    depot?.sickLine &&
    ((depot.sickLine.capacity && depot.sickLine.capacity !== 0) ||
      (Array.isArray(depot.sickLine.tasks) &&
        depot.sickLine.tasks.length > 0) ||
      (Array.isArray(depot.sickLine.equipment) &&
        depot.sickLine.equipment.length > 0));

  return (
    <div className="depot-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="depot-header">
        <img
          src={depot?.image || "https://via.placeholder.com/400"}
          alt={depot?.name || "Depot"}
          className="depot-image"
        />
        <div className="depot-info">
          <h1>
            {depot?.name} ({depot?.code || "N/A"})
          </h1>
          <p>
            <strong>Description:</strong>{" "}
            {depot?.description || "No description available"}
          </p>
        </div>
      </div>

      <div className="details-section">
        {showWashingLine && (
          <div className="line-info">
            <h2>🚿 Washing Line</h2>
            <ul>
              {depot.washingLine.capacity &&
                depot.washingLine.capacity !== 0 && (
                  <li>
                    <strong>Capacity:</strong> {depot.washingLine.capacity}
                  </li>
                )}
              {Array.isArray(depot.washingLine.techniques) &&
                depot.washingLine.techniques.length > 0 && (
                  <li>
                    <strong>Techniques:</strong>{" "}
                    {depot.washingLine.techniques.join(", ")}
                  </li>
                )}
              {Array.isArray(depot.washingLine.features) &&
                depot.washingLine.features.length > 0 && (
                  <li>
                    <strong>Features:</strong>{" "}
                    {depot.washingLine.features.join(", ")}
                  </li>
                )}
            </ul>
          </div>
        )}

        {showSickLine && (
          <div className="line-info">
            <h2>🔧 Sick Line</h2>
            <ul>
              {Array.isArray(depot.sickLine.tasks) &&
                depot.sickLine.tasks.length > 0 && (
                  <li>
                    <strong>Tasks:</strong> {depot.sickLine.tasks.join(", ")}
                  </li>
                )}
              {depot.sickLine.capacity && depot.sickLine.capacity !== 0 && (
                <li>
                  <strong>Capacity:</strong> {depot.sickLine.capacity}
                </li>
              )}
              {Array.isArray(depot.sickLine.equipment) &&
                depot.sickLine.equipment.length > 0 && (
                  <li>
                    <strong>Equipment:</strong>{" "}
                    {depot.sickLine.equipment.join(", ")}
                  </li>
                )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepotDetail;
