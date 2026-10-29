import {
FaDownload,
FaFilePdf,
FaCamera
} from "react-icons/fa";

function QuickActions(){

return(

<div className="quick-card">

<h2>Quick Actions</h2>

<button>

<FaDownload/>

Download Video

</button>

<button>

<FaFilePdf/>

Generate Report

</button>

<button>

<FaCamera/>

Capture Snapshot

</button>

</div>

);

}

export default QuickActions;