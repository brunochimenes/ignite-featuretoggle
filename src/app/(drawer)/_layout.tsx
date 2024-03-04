import { Drawer } from "expo-router/drawer";

import { CustomOptions } from "@/@types/navigation";

import { DrawerContent } from "@/components/drawer-content";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Principal",
            iconName: "inbox",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="promotion"
        options={
          {
            title: "Promoções",
            iconName: "sell",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="social"
        options={
          {
            title: "Social",
            iconName: "group",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="starts"
        options={
          {
            title: "Com estrela",
            iconName: "star-outline",
            sectionTitle: "Todos os marcadores",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconName: "schedule",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviados",
            iconName: "send",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunhos",
            iconName: "note",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Span",
            iconName: "info-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="schedule"
        options={
          {
            title: "Agenda",
            iconName: "calendar-today",
            sectionTitle: "Apps do Google",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="contacts"
        options={
          {
            title: "Contatos",
            iconName: "contacts",
            isDivider: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="help"
        options={
          {
            title: "Ajuda e feedback",
            iconName: "help-outline",
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
