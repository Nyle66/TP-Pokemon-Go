-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mar 03 Octobre 2017 à 15:28
-- Version du serveur :  5.6.35
-- Version de PHP :  7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `pokemon`
--

-- --------------------------------------------------------

--
-- Structure de la table `pokedex`
--

CREATE TABLE `pokedex` (
  `id_user` int(11) NOT NULL,
  `id_poke` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `pokemon`
--

CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL,
  `pokemonTitle` varchar(255) NOT NULL,
  `pokemonIcon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `pokemon`
--

INSERT INTO `pokemon` (`id`, `pokemonTitle`, `pokemonIcon`) VALUES
(1, 'Bulbizare', 'image/bulbi.png'),
(2, 'Dardargnan', 'image/dard.png'),
(3, 'Feunard', 'image/feun.png'),
(4, 'Nidoking', 'image/nido.png'),
(5, 'Sablaireau', 'image/sabl.png'),
(6, 'Arcanin', 'image/arca.png'),
(7, 'Roucarnage', 'image/rouca.png'),
(8, 'Carapuce', 'image/cara.png'),
(9, 'Salamèche', 'image/sala.png'),
(10, 'Papillusion', 'image/papi.png');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'jeremy', 'passjeremy'),
(2, 'pierre', 'passpierre');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `pokemon`
--
ALTER TABLE `pokemon`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `pokemon`
--
ALTER TABLE `pokemon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;