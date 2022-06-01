/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container } from './styles';

export interface ITabs {
  /**
   * @property *tabs* = Abas a serem exibidas
   * @example tabs: [{...}]
   */
  tabs: {
    /**
     * @property *anchorTab* = Identificador da aba.
     * @example anchorTab: 0
     */

    anchorTab: number;
    /**
     * @property *label* = Nome do aba
     * @example label: 'hello'
     */

    label: string;
  }[];
  /**
   * @property *content* = Conteudos das abas
   * @example content: [{...}]
   */
  content: {
    /**
     * @property *anchorContent* = Identificador do conteúdo. Usado para assimilar a aba selecionada com o conteúdo a ser exibido.
     * @example anchorContent: 0
     */
    anchorContent: number;
    /**
     * @property *children* = Conteúdo a ser exibido
     * @example name: ()=><Hello />
     */

    children?: React.ReactNode;
  }[];
}

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* @ts-ignore  */}
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

/**
 * Componente SimpleTabs
 * Permite a exibição de conteúdos organizados por abas.
 * @param {ITabs.tabs} tabs abas a serem exibidas
 * @param {ITabs.content} content abas a serem exibidas
 *
 */
export const SimpleTabs: React.FC<ITabs> = ({ content, tabs }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map(tab => {
            return (
              <Tab
                label={`${tab.label}`}
                {...a11yProps(tab.anchorTab)}
                key={String(tab.anchorTab)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      {content.map(el => (
        <TabPanel value={value} index={el.anchorContent} key={el.anchorContent}>
          {el.children}
        </TabPanel>
      ))}
    </Container>
  );
};

export default SimpleTabs;
