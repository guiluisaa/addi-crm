import React, { FC, useMemo } from 'react';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

import Icon, { IconWrapper } from '@/components/icons/Icon.component';

type RegistreyCellProps = {
  isLoading?: boolean;
  existsInRegisty: boolean | null;
  matchWithRegisty: boolean | null;
};

const RegistreyCell: FC<RegistreyCellProps> = ({
  isLoading,
  existsInRegisty,
  matchWithRegisty,
}) => {
  const wasFetch = useMemo(
    () => existsInRegisty !== null && matchWithRegisty !== null,
    [existsInRegisty, matchWithRegisty]
  );

  const styleType = useMemo(() => {
    if (wasFetch) {
      if (existsInRegisty && matchWithRegisty) return 'success';
      if (existsInRegisty && !matchWithRegisty) return 'warning';
      if (!existsInRegisty && !matchWithRegisty) return 'danger';
    }

    return undefined;
  }, [existsInRegisty, matchWithRegisty]);

  return (
    <IconWrapper isLoading={isLoading && !wasFetch}>
      <Icon icon={faIdCard} styleType={styleType} />
    </IconWrapper>
  );
};

export default RegistreyCell;
