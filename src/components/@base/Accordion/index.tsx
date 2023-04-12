import React, {useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import AppText from '../AppText';
import FlexView from '../FlexView';
import colors from 'common/styles/colors';
import useAccordionStore from 'stores/useAccordionStore';

type AccordionProps = {
  name: string;
  label: string;
  preview: string;
  exclusive?: boolean;
  children: React.ReactNode;
};

function Accordion({
  label,
  preview,
  name,
  exclusive,
  children,
}: AccordionProps) {
  const {currentOpendName, setCurrentOpendName, clearCurrentOpendName} =
    useAccordionStore();
  const [isOpend, setIsOpend] = useState(false);

  const openAccordion = () => {
    if (name) setCurrentOpendName(name);
    setIsOpend(true);
  };
  const closeAccordion = () => {
    setIsOpend(false);
    clearCurrentOpendName();
  };

  const toggleAccordion = () => (isOpend ? closeAccordion() : openAccordion());

  useEffect(() => {
    if (!exclusive) return;
    if (!currentOpendName) return;
    if (name !== currentOpendName) closeAccordion();
  }, [exclusive, name, currentOpendName]);

  return (
    <View>
      <Pressable
        onPress={toggleAccordion}
        className="items-center justify-center">
        <FlexView direction="row" gapSize="small" className="items-center">
          <AppText color={colors.gray[400]}>{isOpend ? '-' : '+'}</AppText>
          <AppText typoStyle="Action">{label}</AppText>
          {preview && (
            <AppText typoStyle="B2" color={colors.gray[400]}>
              {preview}
            </AppText>
          )}
        </FlexView>
      </Pressable>
      {isOpend && <View className="px-4 pt-8 pb-4">{children}</View>}
    </View>
  );
}

export default Accordion;
