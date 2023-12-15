
import TopicHeader from "../../component/topic_header"

import CRUDFloorPlanFloorId from "./crud_floor_plan_floor_id"
import CRUDFloorPlanName from "./crud_floor_plan_name"
import CRUDFloorPlanLength from "./crud_floor_plan_length"
import CRUDFloorPlanWidth from "./crud_floor_plan_width"
import CRUDFloorPlanFileContent from "./crud_floor_plan_file_content"
import CRUDFloorPlanId from "./crud_floor_plan_id"

export default function CRUDFloorPlanInput(){
    return (
        <div id="crud-floor-plan-input" style={{display: "flex", flexDirection: "column",}}>
            {TopicHeader("CRUDFloorPlan")}
            {CRUDFloorPlanFloorId()}
            {CRUDFloorPlanName()}
            {CRUDFloorPlanLength()}
            {CRUDFloorPlanWidth()}
            {CRUDFloorPlanFileContent()}
            {CRUDFloorPlanId()}
        </div>
    )
}

/*
#REPRESENTATION#
CRUD floor plan
- floor_plan_id
- name
- plan_length
- plan_width
- file_content (this will be file upload)
- floor_id
*/