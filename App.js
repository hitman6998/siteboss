import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DailyLogScreen from './screens/DailyLogScreen';
import ToolboxTalkScreen from './screens/ToolboxTalkScreen';
import SubcontractorScreen from './screens/SubcontractorScreen';
import IncidentReportScreen from './screens/IncidentReportScreen';
import ProcoreExportScreen from './screens/ProcoreExportScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Daily Log" component={DailyLogScreen} />
        <Stack.Screen name="Toolbox Talks" component={ToolboxTalkScreen} />
        <Stack.Screen name="Subcontractors" component={SubcontractorScreen} />
        <Stack.Screen name="Incident Report" component={IncidentReportScreen} />
        <Stack.Screen name="Procore Export" component={ProcoreExportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
