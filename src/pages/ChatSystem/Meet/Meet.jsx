/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import React from "react";
import {JitsiMeeting} from "@jitsi/react-sdk";
import {useNavigate, useParams} from "react-router-dom";
import {fetchStudentData} from "@/redux/studentSlice/api.js";
import {useQuery} from "react-query";
import {urls} from "@/apis/config/urls.js";
import Loading from "@/components/Loading/Loading.jsx";

const Meet = () => {
  const navigation = useNavigate();
  const { id, title } = useParams();
  const { data: student } = useQuery({
    queryKey: ["common_student"],
    queryFn: () => fetchStudentData(),
  });

  console.log({ id, title, student });

  return (
    <div>
      <JitsiMeeting
        domain={"meet.admissionsassist.com"}
        roomName={title}
        configOverwrite={{
          startWithAudioMuted: true,
          //moderator
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
          enableNoAudioDetection: true,
          disableShowMoreStats: true,
          enableNoisyMicDetection: true,
          cameraFacingMode: "user",
          localRecording: {
            disable: false,
            notifyAllParticipants: false,
            disableSelfRecording: false,
          },
          toolbarButtons: [
            "camera",
            "chat",
            "closedcaptions",
            "desktop",
            "dock-iframe",
            "etherpad",
            "filmstrip",
            "fullscreen",
            "hangup",
            // 'hangup-menu',
            "highlight",
            // 'invite',
            "linktosalesforce",
            "livestreaming",
            "microphone",
            "noisesuppression",
            "participants-pane",
            "profile",
            "raisehand",
            "recording",
            "security",
            "select-background",
            "settings",
            "shareaudio",
            "sharedvideo",
            "shortcuts",
            // 'stats',
            "tileview",
            "toggle-camera",
            "undock-iframe",
            "videoquality",
            "whiteboard",
          ],
        }}
        interfaceConfigOverwrite={{
          APP_NAME: "Admission Assist",
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: `${student?.first_name} ${student?.last_name}`,
          email: student?.email,
          avatar: `${urls?.student}/${student?.photo}`,
          role: "participant",
        }}
        spinner={() => <Loading />}
        onReadyToClose={() => {
          navigation("/chat_system/calendar");
        }}
        onApiReady={(externalApi) => {
          console.log({ externalApi });
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "800px";
        }}
      />
    </div>
  );
};

export default Meet;
