import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import ProjectsScreen from '../components/ProjectsScreen';

type PscProps = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

const ProjectsScreenContainer: React.FC<PscProps> = (props) => {
  return (
    <View>
      <ProjectsScreen {...props} />
    </View>
  );
};

export default ProjectsScreenContainer;
