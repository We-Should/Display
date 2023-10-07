import React from "react";

export const renderObject: React.FC<object> = (object: object | null) => {
    if (!object) {
        return null;
    }
    const entries = Object.entries(object);
    const renderedEntries = entries.map(([key, value]) => {
      if (typeof value === "object") {
        return (
          <React.Fragment key={key}>
            {key}: &#123; {renderObject(value as object)}  &#125; <br/>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={key}>
            &nbsp;&nbsp;{key}: {value}; <br/>
          </React.Fragment>
        );
      }
    });
  
    return (
      <div>
        {renderedEntries}
      </div>
    );
  };

export const debug = (obj: any) => {
    if (process.env.NODE_ENV === "development") {
        return obj;
    }

    return null;
}



