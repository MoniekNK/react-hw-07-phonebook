.contactList {
    list-style-type: none;
    padding: 0;
    width: 400px;
    border: 3px solid indigo;
    border-radius: 18px;
    background-color: azure;
    font-weight: 600;
    font-style: italic;
  }
  
  .contactList__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .contactList__item strong {
    margin-right: 10px;
  }
  .contactInfo {
    display: flex;
    align-items: center;
    line-height: 3;
  }
  
  .deleteButton {
    font-size: 15px;
    cursor: pointer;
    color: goldenrod;
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    background-color: indigo;
  }
  
  .deleteButton:hover {
    color: indigo;
    background-color: goldenrod;
  }