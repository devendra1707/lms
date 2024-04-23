import React, { useEffect, useState } from "react";
import ViewDomainAction from "./ViewDomainAction";
import "./ViewDomain.scss";
import { getAllDomains } from "../../services/domain/DomainService";
import { useNavigate } from "react-router-dom";

const TABLE_HEADS = ["Title", "Description", "Action"];

const ViewDomain = () => {
  const navigate = useNavigate();
  const [domain, setDomain] = useState(undefined);

  useEffect(() => {
    getAllDomains()
      .then((data) => {
        setDomain(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Domain details:", error);
      });
  }, []);

  const addDomain = () => {
    navigate("/add/domain");
  };

  return (
    <section className="content-area-table">
      {/* {JSON.stringify(domain)} */}
      <div className="data-table-info">
        <h4
          className="data-table-title"
          onClick={addDomain}
          style={{ cursor: "pointer" }}
        >
          Add Domain
        </h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {domain?.map((details) => {
              return (
                <tr key={details.domainId}>
                  <td>{details.title}</td>
                  <td>{details.description}</td>

                  <td className="dt-cell-action">
                    <ViewDomainAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ViewDomain;
