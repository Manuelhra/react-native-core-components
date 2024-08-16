import React, {useContext} from 'react';
import {SectionList, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {CardComponent} from '../../components/ui/CardComponent';
import {Subtitle} from '../../components/ui/Subtitle';
import {Separator} from '../../components/ui/Separator';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';
import {ThemeColors} from '../../../config/theme/theme';

interface Houses {
  title: string;
  data: string[];
}

const houses: Houses[] = [
  {
    title: 'DC Comics',
    data: [
      'Superman',
      'Batman',
      'Wonder Woman (Mujer Maravilla)',
      'The Flash (Flash)',
      'Aquaman',
      'Green Lantern (Linterna Verde)',
      'Cyborg',
      'Shazam',
      'Green Arrow (Flecha Verde)',
      'Batgirl (Batichica)',
      'Nightwing (Ala Nocturna)',
      'Supergirl',
      'Martian Manhunter (Detective Marciano)',
      'Harley Quinn',
      'Joker',
      'Catwoman (Gata Salvaje)',
      'Lex Luthor',
      'Poison Ivy (Hiedra Venenosa)',
      'Robin',
      'Deathstroke (Deathstroke el Terminator)',
    ],
  },
  {
    title: 'Marvel Comics',
    data: [
      'Spider-Man (Hombre Araña)',
      'Iron Man (Hombre de Hierro)',
      'Captain America (Capitán América)',
      'Thor',
      'Black Widow (Viuda Negra)',
      'Hulk',
      'Doctor Strange (Doctor Extraño)',
      'Black Panther (Pantera Negra)',
      'Captain Marvel (Capitana Marvel)',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch (Bruja Escarlata)',
      'Ant-Man (Hombre Hormiga)',
      'Wasp (Avispa)',
      'Groot',
      'Rocket Raccoon (Mapache Cohete)',
      'Gamora',
      'Drax the Destroyer (Drax el Destructor)',
    ],
  },
  {
    title: 'Anime',
    data: [
      'Son Goku (Dragon Ball)',
      'Naruto Uzumaki (Naruto)',
      'Monkey D. Luffy (One Piece)',
      'Sailor Moon (Sailor Moon)',
      'Kenshin Himura (Rurouni Kenshin)',
      'Edward Elric (Fullmetal Alchemist)',
      'Inuyasha (Inuyasha)',
      'Sakura Kinomoto (Cardcaptor Sakura)',
      'Light Yagami (Death Note)',
      'Eren Yeager (Attack on Titan)',
      'Lelouch Lamperouge (Code Geass)',
      'Vegeta (Dragon Ball)',
      'Ichigo Kurosaki (Bleach)',
      'Kaneki Ken (Tokyo Ghoul)',
      'Gon Freecss (Hunter x Hunter)',
      'Asuka Langley Soryu (Neon Genesis Evangelion)',
      'Saitama (One Punch Man)',
      'Mikasa Ackerman (Attack on Titan)',
      'Natsu Dragneel (Fairy Tail)',
      'Usagi Tsukino (Sailor Moon)',
      'Sasuke Uchiha (Naruto)',
    ],
  },
];

type CustomSectionListScreenProps = {};

export const CustomSectionListScreen =
  ({}: CustomSectionListScreenProps): React.JSX.Element => {
    const {colors} = useContext<ThemeContextType>(ThemeContext);

    const {height} = useWindowDimensions();
    const {top} = useSafeAreaInsets();

    const styles = getStyles(colors, height, top);

    return (
      <CustomView>
        <Title text="Person list" />

        <CardComponent>
          <SectionList
            sections={houses}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
              <Subtitle text={section.title} />
            )}
            SectionSeparatorComponent={Separator}
            ListHeaderComponent={<Title text="Houses" />}
            ListFooterComponent={<Title text={`Sections: ${houses.length}`} />}
            style={styles.listFooterComponent}
          />
        </CardComponent>
      </CustomView>
    );
  };

const getStyles = (colors: ThemeColors, height: number, top: number) =>
  StyleSheet.create({
    item: {
      color: colors.text,
    },
    listFooterComponent: {
      height: height - top - 60,
    },
  });
