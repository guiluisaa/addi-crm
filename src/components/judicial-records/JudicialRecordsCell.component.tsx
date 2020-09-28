import React, { FC, useMemo } from 'react';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

import Icon, { IconWrapper } from '@/components/icons/Icon.component';

type RegistryCellProps = {
  isLoading?: boolean;
  hasJudicialRecord: boolean | null;
};

const RegistryCell: FC<RegistryCellProps> = ({
  isLoading,
  hasJudicialRecord,
}) => {
  const wasFetch = useMemo(() => hasJudicialRecord !== null, [
    hasJudicialRecord,
  ]);

  const styleType = useMemo(() => {
    if (wasFetch) {
      if (!hasJudicialRecord) return 'success';
      else return 'danger';
    }

    return undefined;
  }, [hasJudicialRecord]);

  return (
    <IconWrapper isLoading={isLoading && !wasFetch}>
      <Icon icon={faGavel} styleType={styleType} />
    </IconWrapper>
  );
};

export default RegistryCell;
