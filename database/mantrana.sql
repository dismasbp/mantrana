-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2025 at 02:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mantrana`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `fulltext` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `photo_alt` varchar(255) DEFAULT NULL,
  `photo_caption` longtext DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `code_snippet` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `category_id`, `title`, `fulltext`, `photo`, `photo_alt`, `photo_caption`, `meta_title`, `meta_description`, `slug`, `code_snippet`, `created_at`, `updated_at`) VALUES
(2, 1, 'Lorem Ipsum', '<p><img class=\"image_resized\" style=\"aspect-ratio:2607/1738;width:52.01%;\" src=\"https://mantrana.local/storage/ckeditor/kE3sA8iMIs29GKws9VMdcViVXCS0ht9LPn8lqqDL.jpg\" width=\"2607\" height=\"1738\"><br>What is Lorem Ipsum?</p><p style=\"margin-left:0px;text-align:justify;\"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2 style=\"margin-left:0px;\">Why do we use it?</h2><p style=\"margin-left:0px;text-align:justify;\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br>&nbsp;</p><h2 style=\"margin-left:0px;\">Where does it come from?</h2><p style=\"margin-left:0px;text-align:justify;\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p style=\"margin-left:0px;text-align:justify;\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><h2 style=\"margin-left:0px;\">Where can I get some?</h2><p style=\"margin-left:0px;text-align:justify;\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'loremipsum', 'Lorem Ipsum', 'loremipsum', 'loremipsumdolorsitamet', 'lorem-ipsum', 'loremipsum', '2025-10-02 22:42:04', '2025-10-02 22:42:04'),
(3, 2, 'Ipsum Lorem', '<h2 style=\"margin-left:0px;\">What is Lorem Ipsum?</h2><p style=\"margin-left:0px;text-align:justify;\"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2 style=\"margin-left:0px;\">Why do we use it?</h2><p style=\"margin-left:0px;text-align:justify;\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><figure class=\"image image_resized\" style=\"width:52.01%;\"><img style=\"aspect-ratio:1200/628;\" src=\"https://mantrana.local/storage/ckeditor/L76gQrZOhf9JYWmFbf3fSzq1n016bS3ljVBW2GxE.webp\" width=\"1200\" height=\"628\"></figure><h2 style=\"margin-left:0px;\">Where does it come from?</h2><p style=\"margin-left:0px;text-align:justify;\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p style=\"margin-left:0px;text-align:justify;\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><h2 style=\"margin-left:0px;\">Where can I get some?</h2><p style=\"margin-left:0px;text-align:justify;\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'ipsumlorem', 'Ipsum Lorem', 'ipsumlorem', 'ipsumlorem', 'ipsum-lorem', 'ipsumlorem', '2025-10-02 22:43:24', '2025-10-02 22:43:24'),
(11, 2, 'Sample Article Title 11761444178', 'This is sample content for article number 1.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 1', 'Sample caption for Article 1', 'Sample Article Title 11761444178 Meta Title', 'Meta description for Article 1.', 'sample-article-title-11761444178', '<p>Sample code snippet 1</p>', '2025-10-25 19:02:58', '2025-10-25 19:02:58'),
(12, 1, 'Sample Article Title 11761444431', 'This is sample content for article number 1.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 1', 'Sample caption for Article 1', 'Sample Article Title 11761444431 Meta Title', 'Meta description for Article 1.', 'sample-article-title-11761444431', '<p>Sample code snippet 1</p>', '2025-10-25 19:07:11', '2025-10-25 19:07:11'),
(13, 1, 'Sample Article Title 21761444432', 'This is sample content for article number 2.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 2', 'Sample caption for Article 2', 'Sample Article Title 21761444432 Meta Title', 'Meta description for Article 2.', 'sample-article-title-21761444432', '<p>Sample code snippet 2</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(14, 2, 'Sample Article Title 31761444432', 'This is sample content for article number 3.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 3', 'Sample caption for Article 3', 'Sample Article Title 31761444432 Meta Title', 'Meta description for Article 3.', 'sample-article-title-31761444432', '<p>Sample code snippet 3</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(15, 2, 'Sample Article Title 41761444432', 'This is sample content for article number 4.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 4', 'Sample caption for Article 4', 'Sample Article Title 41761444432 Meta Title', 'Meta description for Article 4.', 'sample-article-title-41761444432', '<p>Sample code snippet 4</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(16, 1, 'Sample Article Title 51761444432', 'This is sample content for article number 5.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 5', 'Sample caption for Article 5', 'Sample Article Title 51761444432 Meta Title', 'Meta description for Article 5.', 'sample-article-title-51761444432', '<p>Sample code snippet 5</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(17, 2, 'Sample Article Title 61761444432', 'This is sample content for article number 6.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 6', 'Sample caption for Article 6', 'Sample Article Title 61761444432 Meta Title', 'Meta description for Article 6.', 'sample-article-title-61761444432', '<p>Sample code snippet 6</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(18, 2, 'Sample Article Title 71761444432', 'This is sample content for article number 7.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 7', 'Sample caption for Article 7', 'Sample Article Title 71761444432 Meta Title', 'Meta description for Article 7.', 'sample-article-title-71761444432', '<p>Sample code snippet 7</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(19, 2, 'Sample Article Title 81761444432', 'This is sample content for article number 8.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 8', 'Sample caption for Article 8', 'Sample Article Title 81761444432 Meta Title', 'Meta description for Article 8.', 'sample-article-title-81761444432', '<p>Sample code snippet 8</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(20, 2, 'Sample Article Title 91761444432', 'This is sample content for article number 9.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 9', 'Sample caption for Article 9', 'Sample Article Title 91761444432 Meta Title', 'Meta description for Article 9.', 'sample-article-title-91761444432', '<p>Sample code snippet 9</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(21, 2, 'Sample Article Title 101761444432', 'This is sample content for article number 10.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 10', 'Sample caption for Article 10', 'Sample Article Title 101761444432 Meta Title', 'Meta description for Article 10.', 'sample-article-title-101761444432', '<p>Sample code snippet 10</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(22, 1, 'Sample Article Title 111761444432', 'This is sample content for article number 11.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 11', 'Sample caption for Article 11', 'Sample Article Title 111761444432 Meta Title', 'Meta description for Article 11.', 'sample-article-title-111761444432', '<p>Sample code snippet 11</p>', '2025-10-25 19:07:12', '2025-10-25 19:07:12'),
(23, 1, 'Sample Article Title 121761444433', 'This is sample content for article number 12.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 12', 'Sample caption for Article 12', 'Sample Article Title 121761444433 Meta Title', 'Meta description for Article 12.', 'sample-article-title-121761444433', '<p>Sample code snippet 12</p>', '2025-10-25 19:07:13', '2025-10-25 19:07:13'),
(24, 2, 'Sample Article Title 131761444433', 'This is sample content for article number 13.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 13', 'Sample caption for Article 13', 'Sample Article Title 131761444433 Meta Title', 'Meta description for Article 13.', 'sample-article-title-131761444433', '<p>Sample code snippet 13</p>', '2025-10-25 19:07:13', '2025-10-25 19:07:13'),
(25, 2, 'Sample Article Title 141761444433', 'This is sample content for article number 14.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 14', 'Sample caption for Article 14', 'Sample Article Title 141761444433 Meta Title', 'Meta description for Article 14.', 'sample-article-title-141761444433', '<p>Sample code snippet 14</p>', '2025-10-25 19:07:13', '2025-10-25 19:07:13'),
(26, 2, 'Sample Article Title 151761444433', 'This is sample content for article number 15.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 15', 'Sample caption for Article 15', 'Sample Article Title 151761444433 Meta Title', 'Meta description for Article 15.', 'sample-article-title-151761444433', '<p>Sample code snippet 15</p>', '2025-10-25 19:07:13', '2025-10-25 19:07:13'),
(27, 2, 'Sample Article Title 161761444433', 'This is sample content for article number 16.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 16', 'Sample caption for Article 16', 'Sample Article Title 161761444433 Meta Title', 'Meta description for Article 16.', 'sample-article-title-161761444433', '<p>Sample code snippet 16</p>', '2025-10-25 19:07:13', '2025-10-25 19:07:13'),
(28, 1, 'Sample Article Title 171761444433', 'This is sample content for article number 17.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 17', 'Sample caption for Article 17', 'Sample Article Title 171761444433 Meta Title', 'Meta description for Article 17.', 'sample-article-title-171761444433', '<p>Sample code snippet 17</p>', '2025-10-25 19:07:13', '2025-10-25 19:07:13'),
(29, 1, 'Sample Article Title 181761444434', 'This is sample content for article number 18.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 18', 'Sample caption for Article 18', 'Sample Article Title 181761444434 Meta Title', 'Meta description for Article 18.', 'sample-article-title-181761444434', '<p>Sample code snippet 18</p>', '2025-10-25 19:07:14', '2025-10-25 19:07:14'),
(30, 1, 'Sample Article Title 191761444434', 'This is sample content for article number 19.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 19', 'Sample caption for Article 19', 'Sample Article Title 191761444434 Meta Title', 'Meta description for Article 19.', 'sample-article-title-191761444434', '<p>Sample code snippet 19</p>', '2025-10-25 19:07:14', '2025-10-25 19:07:14'),
(31, 2, 'Sample Article Title 201761444434', 'This is sample content for article number 20.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 20', 'Sample caption for Article 20', 'Sample Article Title 201761444434 Meta Title', 'Meta description for Article 20.', 'sample-article-title-201761444434', '<p>Sample code snippet 20</p>', '2025-10-25 19:07:14', '2025-10-25 19:07:14'),
(32, 2, 'Sample Article Title 211761444434', 'This is sample content for article number 21.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 21', 'Sample caption for Article 21', 'Sample Article Title 211761444434 Meta Title', 'Meta description for Article 21.', 'sample-article-title-211761444434', '<p>Sample code snippet 21</p>', '2025-10-25 19:07:14', '2025-10-25 19:07:14'),
(33, 1, 'Sample Article Title 221761444434', 'This is sample content for article number 22.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 22', 'Sample caption for Article 22', 'Sample Article Title 221761444434 Meta Title', 'Meta description for Article 22.', 'sample-article-title-221761444434', '<p>Sample code snippet 22</p>', '2025-10-25 19:07:14', '2025-10-25 19:07:14'),
(34, 2, 'Sample Article Title 231761444434', 'This is sample content for article number 23.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 23', 'Sample caption for Article 23', 'Sample Article Title 231761444434 Meta Title', 'Meta description for Article 23.', 'sample-article-title-231761444434', '<p>Sample code snippet 23</p>', '2025-10-25 19:07:14', '2025-10-25 19:07:14'),
(35, 2, 'Sample Article Title 241761444435', 'This is sample content for article number 24.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 24', 'Sample caption for Article 24', 'Sample Article Title 241761444435 Meta Title', 'Meta description for Article 24.', 'sample-article-title-241761444435', '<p>Sample code snippet 24</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(36, 1, 'Sample Article Title 251761444435', 'This is sample content for article number 25.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 25', 'Sample caption for Article 25', 'Sample Article Title 251761444435 Meta Title', 'Meta description for Article 25.', 'sample-article-title-251761444435', '<p>Sample code snippet 25</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(37, 1, 'Sample Article Title 261761444435', 'This is sample content for article number 26.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 26', 'Sample caption for Article 26', 'Sample Article Title 261761444435 Meta Title', 'Meta description for Article 26.', 'sample-article-title-261761444435', '<p>Sample code snippet 26</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(38, 1, 'Sample Article Title 271761444435', 'This is sample content for article number 27.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 27', 'Sample caption for Article 27', 'Sample Article Title 271761444435 Meta Title', 'Meta description for Article 27.', 'sample-article-title-271761444435', '<p>Sample code snippet 27</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(39, 2, 'Sample Article Title 281761444435', 'This is sample content for article number 28.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 28', 'Sample caption for Article 28', 'Sample Article Title 281761444435 Meta Title', 'Meta description for Article 28.', 'sample-article-title-281761444435', '<p>Sample code snippet 28</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(40, 1, 'Sample Article Title 291761444435', 'This is sample content for article number 29.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 29', 'Sample caption for Article 29', 'Sample Article Title 291761444435 Meta Title', 'Meta description for Article 29.', 'sample-article-title-291761444435', '<p>Sample code snippet 29</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(41, 2, 'Sample Article Title 301761444435', 'This is sample content for article number 30.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 30', 'Sample caption for Article 30', 'Sample Article Title 301761444435 Meta Title', 'Meta description for Article 30.', 'sample-article-title-301761444435', '<p>Sample code snippet 30</p>', '2025-10-25 19:07:15', '2025-10-25 19:07:15'),
(42, 1, 'Sample Article Title 11761446425', 'This is sample content for article number 1.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 1', 'Sample caption for Article 1', 'Sample Article Title 11761446425 Meta Title', 'Meta description for Article 1.', 'sample-article-title-11761446425', '<p>Sample code snippet 1</p>', '2025-10-25 19:39:25', '2025-10-25 19:39:25'),
(43, 2, 'Sample Article Title 21761446425', 'This is sample content for article number 2.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 2', 'Sample caption for Article 2', 'Sample Article Title 21761446425 Meta Title', 'Meta description for Article 2.', 'sample-article-title-21761446425', '<p>Sample code snippet 2</p>', '2025-10-25 19:38:25', '2025-10-25 19:38:25'),
(44, 2, 'Sample Article Title 31761446426', 'This is sample content for article number 3.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 3', 'Sample caption for Article 3', 'Sample Article Title 31761446426 Meta Title', 'Meta description for Article 3.', 'sample-article-title-31761446426', '<p>Sample code snippet 3</p>', '2025-10-25 19:37:25', '2025-10-25 19:37:25'),
(45, 1, 'Sample Article Title 41761446426', 'This is sample content for article number 4.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 4', 'Sample caption for Article 4', 'Sample Article Title 41761446426 Meta Title', 'Meta description for Article 4.', 'sample-article-title-41761446426', '<p>Sample code snippet 4</p>', '2025-10-25 19:36:25', '2025-10-25 19:36:25'),
(46, 1, 'Sample Article Title 51761446426', 'This is sample content for article number 5.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 5', 'Sample caption for Article 5', 'Sample Article Title 51761446426 Meta Title', 'Meta description for Article 5.', 'sample-article-title-51761446426', '<p>Sample code snippet 5</p>', '2025-10-25 19:35:25', '2025-10-25 19:35:25'),
(47, 1, 'Sample Article Title 61761446426', 'This is sample content for article number 6.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 6', 'Sample caption for Article 6', 'Sample Article Title 61761446426 Meta Title', 'Meta description for Article 6.', 'sample-article-title-61761446426', '<p>Sample code snippet 6</p>', '2025-10-25 19:34:25', '2025-10-25 19:34:25'),
(48, 1, 'Sample Article Title 71761446426', 'This is sample content for article number 7.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 7', 'Sample caption for Article 7', 'Sample Article Title 71761446426 Meta Title', 'Meta description for Article 7.', 'sample-article-title-71761446426', '<p>Sample code snippet 7</p>', '2025-10-25 19:33:25', '2025-10-25 19:33:25'),
(49, 1, 'Sample Article Title 81761446426', 'This is sample content for article number 8.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 8', 'Sample caption for Article 8', 'Sample Article Title 81761446426 Meta Title', 'Meta description for Article 8.', 'sample-article-title-81761446426', '<p>Sample code snippet 8</p>', '2025-10-25 19:32:25', '2025-10-25 19:32:25'),
(50, 1, 'Sample Article Title 91761446426', 'This is sample content for article number 9.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 9', 'Sample caption for Article 9', 'Sample Article Title 91761446426 Meta Title', 'Meta description for Article 9.', 'sample-article-title-91761446426', '<p>Sample code snippet 9</p>', '2025-10-25 19:31:25', '2025-10-25 19:31:25'),
(51, 1, 'Sample Article Title 101761446426', 'This is sample content for article number 10.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 10', 'Sample caption for Article 10', 'Sample Article Title 101761446426 Meta Title', 'Meta description for Article 10.', 'sample-article-title-101761446426', '<p>Sample code snippet 10</p>', '2025-10-25 19:30:25', '2025-10-25 19:30:25'),
(52, 1, 'Sample Article Title 111761446427', 'This is sample content for article number 11.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 11', 'Sample caption for Article 11', 'Sample Article Title 111761446427 Meta Title', 'Meta description for Article 11.', 'sample-article-title-111761446427', '<p>Sample code snippet 11</p>', '2025-10-25 19:29:25', '2025-10-25 19:29:25'),
(53, 2, 'Sample Article Title 121761446427', 'This is sample content for article number 12.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 12', 'Sample caption for Article 12', 'Sample Article Title 121761446427 Meta Title', 'Meta description for Article 12.', 'sample-article-title-121761446427', '<p>Sample code snippet 12</p>', '2025-10-25 19:28:25', '2025-10-25 19:28:25'),
(54, 1, 'Sample Article Title 131761446427', 'This is sample content for article number 13.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 13', 'Sample caption for Article 13', 'Sample Article Title 131761446427 Meta Title', 'Meta description for Article 13.', 'sample-article-title-131761446427', '<p>Sample code snippet 13</p>', '2025-10-25 19:27:25', '2025-10-25 19:27:25'),
(55, 2, 'Sample Article Title 141761446427', 'This is sample content for article number 14.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 14', 'Sample caption for Article 14', 'Sample Article Title 141761446427 Meta Title', 'Meta description for Article 14.', 'sample-article-title-141761446427', '<p>Sample code snippet 14</p>', '2025-10-25 19:26:25', '2025-10-25 19:26:25'),
(56, 2, 'Sample Article Title 151761446427', 'This is sample content for article number 15.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 15', 'Sample caption for Article 15', 'Sample Article Title 151761446427 Meta Title', 'Meta description for Article 15.', 'sample-article-title-151761446427', '<p>Sample code snippet 15</p>', '2025-10-25 19:25:25', '2025-10-25 19:25:25'),
(57, 2, 'Sample Article Title 161761446427', 'This is sample content for article number 16.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 16', 'Sample caption for Article 16', 'Sample Article Title 161761446427 Meta Title', 'Meta description for Article 16.', 'sample-article-title-161761446427', '<p>Sample code snippet 16</p>', '2025-10-25 19:24:25', '2025-10-25 19:24:25'),
(58, 1, 'Sample Article Title 171761446427', 'This is sample content for article number 17.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 17', 'Sample caption for Article 17', 'Sample Article Title 171761446427 Meta Title', 'Meta description for Article 17.', 'sample-article-title-171761446427', '<p>Sample code snippet 17</p>', '2025-10-25 19:23:25', '2025-10-25 19:23:25'),
(59, 1, 'Sample Article Title 181761446427', 'This is sample content for article number 18.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 18', 'Sample caption for Article 18', 'Sample Article Title 181761446427 Meta Title', 'Meta description for Article 18.', 'sample-article-title-181761446427', '<p>Sample code snippet 18</p>', '2025-10-25 19:22:25', '2025-10-25 19:22:25'),
(60, 2, 'Sample Article Title 191761446428', 'This is sample content for article number 19.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 19', 'Sample caption for Article 19', 'Sample Article Title 191761446428 Meta Title', 'Meta description for Article 19.', 'sample-article-title-191761446428', '<p>Sample code snippet 19</p>', '2025-10-25 19:21:25', '2025-10-25 19:21:25'),
(61, 2, 'Sample Article Title 201761446428', 'This is sample content for article number 20.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 20', 'Sample caption for Article 20', 'Sample Article Title 201761446428 Meta Title', 'Meta description for Article 20.', 'sample-article-title-201761446428', '<p>Sample code snippet 20</p>', '2025-10-25 19:20:25', '2025-10-25 19:20:25'),
(62, 1, 'Sample Article Title 211761446428', 'This is sample content for article number 21.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 21', 'Sample caption for Article 21', 'Sample Article Title 211761446428 Meta Title', 'Meta description for Article 21.', 'sample-article-title-211761446428', '<p>Sample code snippet 21</p>', '2025-10-25 19:19:25', '2025-10-25 19:19:25'),
(63, 1, 'Sample Article Title 221761446428', 'This is sample content for article number 22.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 22', 'Sample caption for Article 22', 'Sample Article Title 221761446428 Meta Title', 'Meta description for Article 22.', 'sample-article-title-221761446428', '<p>Sample code snippet 22</p>', '2025-10-25 19:18:25', '2025-10-25 19:18:25'),
(64, 1, 'Sample Article Title 231761446428', 'This is sample content for article number 23.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 23', 'Sample caption for Article 23', 'Sample Article Title 231761446428 Meta Title', 'Meta description for Article 23.', 'sample-article-title-231761446428', '<p>Sample code snippet 23</p>', '2025-10-25 19:17:25', '2025-10-25 19:17:25'),
(65, 2, 'Sample Article Title 241761446428', 'This is sample content for article number 24.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 24', 'Sample caption for Article 24', 'Sample Article Title 241761446428 Meta Title', 'Meta description for Article 24.', 'sample-article-title-241761446428', '<p>Sample code snippet 24</p>', '2025-10-25 19:16:25', '2025-10-25 19:16:25'),
(66, 1, 'Sample Article Title 251761446428', 'This is sample content for article number 25.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 25', 'Sample caption for Article 25', 'Sample Article Title 251761446428 Meta Title', 'Meta description for Article 25.', 'sample-article-title-251761446428', '<p>Sample code snippet 25</p>', '2025-10-25 19:15:25', '2025-10-25 19:15:25'),
(67, 2, 'Sample Article Title 261761446428', 'This is sample content for article number 26.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 26', 'Sample caption for Article 26', 'Sample Article Title 261761446428 Meta Title', 'Meta description for Article 26.', 'sample-article-title-261761446428', '<p>Sample code snippet 26</p>', '2025-10-25 19:14:25', '2025-10-25 19:14:25'),
(68, 2, 'Sample Article Title 271761446429', 'This is sample content for article number 27.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 27', 'Sample caption for Article 27', 'Sample Article Title 271761446429 Meta Title', 'Meta description for Article 27.', 'sample-article-title-271761446429', '<p>Sample code snippet 27</p>', '2025-10-25 19:13:25', '2025-10-25 19:13:25'),
(69, 2, 'Sample Article Title 281761446429', 'This is sample content for article number 28.', 'articles/bo3NIKlQvN51Ir5WD35Y3TmVuyFr2SZuNJilNyli.webp', 'Sample Alt Text 28', 'Sample caption for Article 28', 'Sample Article Title 281761446429 Meta Title', 'Meta description for Article 28.', 'sample-article-title-281761446429', '<p>Sample code snippet 28</p>', '2025-10-25 19:12:25', '2025-10-25 19:12:25'),
(70, 2, 'Sample Article Title 291761446429', 'This is sample content for article number 29.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 29', 'Sample caption for Article 29', 'Sample Article Title 291761446429 Meta Title', 'Meta description for Article 29.', 'sample-article-title-291761446429', '<p>Sample code snippet 29</p>', '2025-10-25 19:11:25', '2025-10-25 19:11:25'),
(71, 1, 'Sample Article Title 301761446429', 'This is sample content for article number 30.', 'articles/VaNsxldujK548DbODVKPZtcznqe6DYWyhol3c31P.jpg', 'Sample Alt Text 30', 'Sample caption for Article 30', 'Sample Article Title 301761446429 Meta Title', 'Meta description for Article 30.', 'sample-article-title-301761446429', '<p>Sample code snippet 30</p>', '2025-10-25 19:10:25', '2025-10-25 19:10:25');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Tech', 'Explore the latest tech news, in-depth reviews, and practical guides on gadgets, software, and innovative technology. Stay up-to-date with the ever-evolving digital world.', 'tech', '2025-10-01 23:13:38', '2025-10-01 23:13:38'),
(2, 'Lifestyle', 'Discover tips and inspiration for personal growth, health, fashion, and travel. Our articles help you live a more balanced and fulfilling life.', 'lifestyle', '2025-10-01 23:20:25', '2025-10-01 23:20:25');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, '18Hole', 'clients/lc2aQC9wqGJwDp8hyDPrIPfqNb7E9q2y0x4lZZJA.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(2, 'Acer', 'clients/I1N03sfjG0SGOxlUHASdDpZ0TNxCBvQ3UDTkMhNm.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(3, 'Asterra', 'clients/ntZklifcPMYLxNzCQx6RZLNDjvSsarMZ4ixh4P8S.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(4, 'Brain Academy', 'clients/JypKt6PKqPcp9JmRYOkrV8AzSs5BnvmDYvEuQ8O4.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(5, 'BYD', 'clients/UYUvkaw6OpGXBcvLgQd5bwtFWHtWiYKeooo7Mhf0.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(6, 'Dewaweb', 'clients/UVY2SwGWmknsZq5N8gyuxewmN4Q0BTJzBlGFk86f.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(7, 'Digitalkie', 'clients/gFnXiYE9XNPsIey7HXcVEnAUcWqAQ8ZvnCKuDZxL.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(8, 'Djarum Super', 'clients/oOzrS6Knsy9QAVl0Aj1cYUexSAPCLk0RqroQXmm7.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(9, 'eCampuz', 'clients/yvSPiTRgjMDSzcpYOcBM9qtGTCOgfPLfa8TdvKy7.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(10, 'ERPSolution', 'clients/jrw101JL5ty93E6vJQjCXNJjLCoE9HNgQOi9v6wx.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(11, 'Fisiohome', 'clients/EUvDcvpcljKzpGTKq6KT3QUxSFeMuMqcCPEwdmG2.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(12, 'Gamatechno', 'clients/lfEXaM4POF49fmXuNohXy5O4hsUpVEjUkSjsD1Sm.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(13, 'Hyundai', 'clients/k1WpOCYgueuMioi538Uquz2fI5oPeJfqsmK0s4zq.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(14, 'Kasdana', 'clients/pgYcFpPhpvByQRhsfrmEACMZY9Bm7gS8mif6gvwM.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(15, 'Mazda', 'clients/dT9RaNzg1qILQiPHVnM2qWqvf7iOfa7qRQZYPVLj.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(16, 'Omela', 'clients/USSsqVGDkr2lQtqcDNoDFod0IAXEZXiVDjyLSEF5.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(17, 'Morinaga', 'clients/w8ncOyeovZev0PcKvqrcpemjgZfWYNAwbr5Ih4Ek.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31'),
(18, 'MustikaLand', 'clients/exT8h3t3tP139qdevbFHhoppShXC95FJVrvxNDCO.png', 1, '2025-11-07 13:39:31', '2025-11-07 13:39:31');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_08_26_100418_add_two_factor_columns_to_users_table', 1),
(5, '2025_09_30_070357_create_article_tag_category_table', 1),
(6, '2025_09_30_074653_create_permission_tables', 1),
(7, '2025_10_01_040312_add_username_users_table', 1),
(8, '2025_10_20_051928_create_sitemaps_table', 2),
(9, '2025_11_01_080254_create_clients_table', 3),
(10, '2025_11_01_080535_create_leads_table', 3),
(12, '2025_11_07_132903_add_timestamps_clients', 4);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 5),
(3, 'App\\Models\\User', 3),
(3, 'App\\Models\\User', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'create articles', 'web', '2025-10-01 10:43:04', '2025-10-01 10:43:04'),
(2, 'edit articles', 'web', '2025-10-01 10:43:04', '2025-10-01 10:43:04'),
(3, 'delete articles', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(4, 'view articles', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(5, 'create categories', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(6, 'edit categories', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(7, 'delete categories', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(8, 'view categories', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(9, 'create tags', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(10, 'edit tags', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(11, 'delete tags', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(12, 'view tags', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(13, 'manage users', 'web', '2025-10-01 10:43:05', '2025-10-01 10:43:05'),
(14, 'view dashboard', 'web', '2025-10-01 10:43:06', '2025-10-01 10:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'administrator', 'web', '2025-10-01 10:43:04', '2025-10-01 10:43:04'),
(2, 'content creator', 'web', '2025-10-01 10:43:04', '2025-10-01 10:43:04'),
(3, 'marketing', 'web', '2025-10-01 10:43:04', '2025-10-01 10:43:04'),
(4, 'markom', 'web', '2025-10-10 00:17:10', '2025-10-10 00:24:03');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(8, 3),
(9, 1),
(9, 2),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(12, 1),
(12, 2),
(12, 3),
(12, 4),
(13, 1),
(14, 1),
(14, 4);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('afvSM6BMiloKZimX5JhY5EvpgknGzgxZBkC5K2Ud', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUmZLNVIyRGxxUlZXNFB5emJ2TzVadkowVDBEaUw2T0pHRXBhOVhQZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHBzOi8vbWFudHJhbmEubG9jYWwvY29udGFjdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1762524197),
('BksizshIvDkHQ1i4s86E96N3LDueCdR4G6mx1bpZ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidVFmRXRuQVNaQ2NoampUVjJISHphUm1MNXQyWWFsaVdhUEV5SUt6USI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHBzOi8vbWFudHJhbmEubG9jYWwvY29udGFjdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1762574827),
('MIPDNwKjTcAUvyV81bHwTsI4d0CHROag5pqlq1u9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibkJsQWVKNmJWTnNxbFd6ZG9KY1c2RkpQbUNlRksxYk5TTUJwTFlLTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjI6Imh0dHBzOi8vbWFudHJhbmEubG9jYWwiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1762519789),
('WyRa1Y7GJzrPevBUNINMkyxmDrMwAy6c14dz8EQP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidGR5YzhoRHdOZU5CUVR3eGpWYVRkQjVheGx3OUNzNU84S0VyQ1JMciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHBzOi8vbWFudHJhbmEubG9jYWwvY29udGFjdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1762617979);

-- --------------------------------------------------------

--
-- Table structure for table `sitemaps`
--

CREATE TABLE `sitemaps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `loc` varchar(255) NOT NULL,
  `lastmod` datetime DEFAULT NULL,
  `changefreq` varchar(255) NOT NULL DEFAULT 'weekly',
  `priority` decimal(2,1) NOT NULL DEFAULT 0.8,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sitemaps`
--

INSERT INTO `sitemaps` (`id`, `loc`, `lastmod`, `changefreq`, `priority`, `created_at`, `updated_at`) VALUES
(1, 'https://mantrana.local/', '2025-10-20 05:33:28', 'weekly', 1.0, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(2, 'https://mantrana.local/p/asset-management-system', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(3, 'https://mantrana.local/p/inventory', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(4, 'https://mantrana.local/p/ticketing', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(5, 'https://mantrana.local/s/custom-software', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(6, 'https://mantrana.local/s/it-consultant', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(7, 'https://mantrana.local/s/it-support', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(8, 'https://mantrana.local/s/training-certification', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(9, 'https://mantrana.local/s/digital-marketing', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(10, 'https://mantrana.local/i/pariwisata', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(11, 'https://mantrana.local/i/manufacturing', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(12, 'https://mantrana.local/i/construction', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(13, 'https://mantrana.local/i/real-estate', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(14, 'https://mantrana.local/i/retail', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(15, 'https://mantrana.local/i/logistik', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(16, 'https://mantrana.local/i/hotel', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:28', '2025-10-19 22:33:28'),
(17, 'https://mantrana.local/i/pendidikan', '2025-10-20 05:33:28', 'monthly', 0.8, '2025-10-19 22:33:29', '2025-10-19 22:33:29'),
(18, 'https://mantrana.local/blog', '2025-10-20 05:33:29', 'weekly', 0.8, '2025-10-19 22:33:29', '2025-10-19 22:33:29');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'news', 'news', '2025-10-01 23:33:21', '2025-10-01 23:33:21'),
(2, 'tech', 'tech', '2025-10-01 23:35:55', '2025-10-01 23:35:55');

-- --------------------------------------------------------

--
-- Table structure for table `tag_relations`
--

CREATE TABLE `tag_relations` (
  `article_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tag_relations`
--

INSERT INTO `tag_relations` (`article_id`, `tag_id`) VALUES
(2, 1),
(3, 2),
(12, 1),
(12, 2),
(13, 1),
(13, 2),
(14, 1),
(14, 2),
(15, 1),
(15, 2),
(16, 1),
(16, 2),
(17, 1),
(17, 2),
(18, 1),
(18, 2),
(19, 1),
(19, 2),
(20, 1),
(20, 2),
(21, 1),
(21, 2),
(22, 1),
(22, 2),
(23, 1),
(23, 2),
(24, 1),
(24, 2),
(25, 1),
(25, 2),
(26, 1),
(26, 2),
(27, 1),
(27, 2),
(28, 1),
(28, 2),
(29, 1),
(29, 2),
(30, 1),
(30, 2),
(31, 1),
(31, 2),
(32, 1),
(32, 2),
(33, 1),
(33, 2),
(34, 1),
(34, 2),
(35, 1),
(35, 2),
(36, 1),
(36, 2),
(37, 1),
(37, 2),
(38, 1),
(38, 2),
(39, 1),
(39, 2),
(40, 1),
(40, 2),
(41, 1),
(41, 2),
(42, 1),
(42, 2),
(43, 1),
(43, 2),
(44, 1),
(44, 2),
(45, 1),
(45, 2),
(46, 1),
(46, 2),
(47, 1),
(47, 2),
(48, 1),
(48, 2),
(49, 1),
(49, 2),
(50, 1),
(50, 2),
(51, 1),
(51, 2),
(52, 1),
(52, 2),
(53, 1),
(53, 2),
(54, 1),
(54, 2),
(55, 1),
(55, 2),
(56, 1),
(56, 2),
(57, 1),
(57, 2),
(58, 1),
(58, 2),
(59, 1),
(59, 2),
(60, 1),
(60, 2),
(61, 1),
(61, 2),
(62, 1),
(62, 2),
(63, 1),
(63, 2),
(64, 1),
(64, 2),
(65, 1),
(65, 2),
(66, 1),
(66, 2),
(67, 1),
(67, 2),
(68, 1),
(68, 2),
(69, 1),
(69, 2),
(70, 1),
(70, 2),
(71, 1),
(71, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` text DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'admin', 'admin@exmple.com', NULL, '$2y$12$Lny0zKBQHlOYfHCID6tJ9u5bu0R1s2fZmGmy1CnTJx2fpU/gw/KyO', NULL, NULL, NULL, NULL, '2025-10-01 11:09:13', '2025-10-01 11:09:13'),
(2, 'Content Creator', 'contentcreator', 'contentcreator@example.com', NULL, '$2y$12$RohPauOVIROVOBNlXKrNkuZyhTgDUlE96n1yF2E1S85N.7uBw96M.', NULL, NULL, NULL, NULL, '2025-10-03 00:31:59', '2025-10-03 01:03:28'),
(3, 'Marketing', 'marketing', 'marketing@example.com', NULL, '$2y$12$Nx8HYDNBy8K1HZhZyYfvS.FftrmdeMIv6bQV6jBkC/l7zpDN9qwQu', NULL, NULL, NULL, NULL, '2025-10-03 00:32:22', '2025-10-03 00:32:22'),
(4, 'testmarketing', 'testmarketing', 'testmarketing@exaple.com', NULL, '$2y$12$.J5TcY7n0yIGeMukEnGA.uzrxzg3cCFuUH4B3cCe1KiphHlC8Gmx6', NULL, NULL, NULL, NULL, '2025-10-03 00:39:09', '2025-10-03 00:39:09'),
(5, 'testcc', 'testcc', 'testcc@example.com', NULL, '$2y$12$va4MKCxrNWcHbdxXOY/louiRlLO2ZUh6MW6sno.1PpibHCiHtqAWa', NULL, NULL, NULL, NULL, '2025-10-03 00:42:13', '2025-10-03 00:42:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_title_unique` (`title`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_category_id_foreign` (`category_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `leads_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `sitemaps`
--
ALTER TABLE `sitemaps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_name_unique` (`name`),
  ADD UNIQUE KEY `tags_slug_unique` (`slug`);

--
-- Indexes for table `tag_relations`
--
ALTER TABLE `tag_relations`
  ADD UNIQUE KEY `tag_relations_article_id_tag_id_unique` (`article_id`,`tag_id`),
  ADD KEY `tag_relations_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sitemaps`
--
ALTER TABLE `sitemaps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `leads`
--
ALTER TABLE `leads`
  ADD CONSTRAINT `leads_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tag_relations`
--
ALTER TABLE `tag_relations`
  ADD CONSTRAINT `tag_relations_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tag_relations_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
