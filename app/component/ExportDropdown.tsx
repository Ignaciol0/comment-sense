import {Button, Popover, ActionList} from '@shopify/polaris';
import { ImportIcon, ExportIcon} from '@shopify/polaris-icons';
import exp from 'constants';
import React from 'react';
import {useState, useCallback} from 'react';

function ExportDropdown() {
  const [active, setActive] = useState(true);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const activator = (
    <Button onClick={toggleActive} disclosure>
      More actions
    </Button>
  );

  return (
    <div style={{height: '200px'}}>
      <Popover
        active={active}
        activator={activator}
        autofocusTarget="first-node"
        onClose={toggleActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[
            {content: 'Importar de Amazon', icon: ImportIcon, onAction:()=>{document.getElementById("my-modal").show()}},
            {content: 'Importar de Aliexpress', icon:ImportIcon, onAction:()=>{}},
            {content: 'Exportar', icon: ExportIcon, onAction:()=>{}},
          ]}
        />
        <ui-modal id="my-modal">
            <p>Message</p>
          <ui-title-bar title="Title">
            <button variant="primary">Label</button>
            <button onclick="document.getElementById('my-modal').hide()">Label</button>
          </ui-title-bar>
        </ui-modal>
      </Popover>
    </div>
  );
}

export default ExportDropdown;