import Loadable from "react-loadable";
import React from "react";

const DynamicImporter = func => Loadable({
    loading: () => <div></div>,
    loader: func,
});

export default DynamicImporter;